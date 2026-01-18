import Link from "next/link";
import Image from "next/image";

import { MdLocationOn } from "react-icons/md";

export default function Sidebar() {
    return (
        <aside className="w-full md:w-72 lg:w-80 flex-shrink-0 md:h-screen md:sticky md:top-0 bg-[var(--color-surface)] border-r border-[var(--color-border)] p-8 overflow-y-auto">
            <div className="flex flex-col gap-6">
                {/* Profile Image Placeholder - In a real app, this would be a real image */}
                <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full border-4 border-white shadow-md relative overflow-hidden">
                    {/* User would replace this with their actual image */}
                    <div className="flex items-center justify-center h-full text-4xl text-gray-400 font-serif">
                        SS
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-3xl font-[family-name:var(--font-space)] font-bold text-[var(--color-text)] tracking-tight">
                        Satyam Singh
                    </h1>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                        Machine Learning Engineer & <br /> Computer Vision Researcher
                    </p>
                </div>

                {/* Contact Info */}
                <div className="border-t border-[var(--color-border)] pt-6">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                        Contact
                    </h2>
                    <div className="flex flex-col gap-2 text-sm">
                        <a href="mailto:satyamsinghpx@gmail.com" className="hover:text-[var(--color-primary)] transition-colors">
                            satyamsinghpx@gmail.com
                        </a>
                        <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                            <MdLocationOn className="w-4 h-4 text-[var(--color-primary)]" />
                            <span>Bihar, India</span>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4 justify-center flex-wrap">
                        <Link href="https://github.com/satyamsingh5512" target="_blank" aria-label="GitHub" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </Link>
                        <Link href="https://linkedin.com/in/satyamsingh" target="_blank" aria-label="LinkedIn" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </Link>
                        {/* Google Scholar */}
                        <Link href="https://scholar.google.com/" target="_blank" aria-label="Google Scholar" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" /></svg>
                        </Link>
                        {/* Kaggle */}
                        <Link href="https://www.kaggle.com/" target="_blank" aria-label="Kaggle" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.825 23.859c-.022.092-.117.141-.285.141h-2.535c-.328 0-.549-.125-.794-.375l-5.694-5.918-3.085 2.871v3.086c0 .18-.112.336-.336.336h-2.18c-.223 0-.336-.156-.336-.336V.336c0-.179.113-.336.336-.336h2.18c.224 0 .336.156.336.336v15.06l8.368-8.913c.245-.273.491-.41.737-.41h2.518c.19 0 .285.082.285.246 0 .074-.034.156-.101.246l-6.176 6.551 6.64 8.799c.045.094.067.176.067.246 0 .09-.011.156-.045.246z" /></svg>
                        </Link>
                        {/* Twitter / X */}
                        <Link href="https://twitter.com/" target="_blank" aria-label="Twitter" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </Link>
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/cv.pdf" target="_blank" className="btn-secondary w-full text-center block text-sm py-2" rel="noopener noreferrer">
                            Download CV
                        </Link>
                    </div>
                </div>

                {/* Technical Expertise (Sidebar version) */}
                <div className="border-t border-[var(--color-border)] pt-6 flex-1">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                        Expertise
                    </h2>
                    <ul className="text-sm space-y-2 text-[var(--color-text-muted)]">
                        <li>• Computer Vision</li>
                        <li>• Deep Learning</li>
                        <li>• Remote Sensing</li>
                        <li>• Neural Networks</li>
                        <li>• PyTorch / TensorFlow</li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
