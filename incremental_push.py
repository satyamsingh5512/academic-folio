import subprocess
import os
import shlex

def run(cmd):
    print(f"Running: {cmd}")
    try:
        subprocess.run(cmd, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {e}")

def get_untracked_files_recurse(path):
    file_list = []
    if os.path.isfile(path):
        return [path]
    for root, _, filenames in os.walk(path):
        for filename in filenames:
            file_list.append(os.path.join(root, filename))
    return file_list

def main():
    try:
        status_output = subprocess.check_output("git status --porcelain", shell=True).decode("utf-8")
    except subprocess.CalledProcessError:
        print("Failed to get git status")
        return

    lines = status_output.splitlines()
    
    for line in lines:
        if not line: continue
        # git status --porcelain format: XY PATH
        # XY are status codes.
        code = line[:2]
        raw_path = line[3:]
        
        # Handle quoting
        if raw_path.startswith('"') and raw_path.endswith('"'):
            # simple unquote - for complex cases use codecs or similar, but this suffices for standard paths
            path = raw_path[1:-1]
            # Handle escaped characters if necessary, but git typically escapes only if needed.
            # Python's string_escape might be needed but let's assume standard names for now.
            path = path.encode('utf-8').decode('unicode_escape') 
        else:
            path = raw_path

        if code.strip() == "??":
            # Untracked
            files_to_add = get_untracked_files_recurse(path)
            for fpath in files_to_add:
                print(f"Processing untracked: {fpath}")
                run(f'git add "{fpath}"')
                run(f'git commit -m "Add {os.path.basename(fpath)}"')
                run('git push')
        
        elif 'D' in code or 'M' in code:
            # Deleted or Modified
            # For Deleted, 'git add' stages the deletion.
            action = "Remove" if 'D' in code else "Update"
            print(f"Processing {action}: {path}")
            run(f'git add "{path}"')
            run(f'git commit -m "{action} {os.path.basename(path)}"')
            run('git push')

if __name__ == "__main__":
    main()
