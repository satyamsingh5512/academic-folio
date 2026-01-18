import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags?: string[];
    details?: string[];
    href?: string;
}

export default function ProjectCard({
    title,
    description,
    tags = [],
    details = [],
    href,
}: ProjectCardProps) {
    const CardWrapper = href ? "article" : "article";

    return (
        <article className="card p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] mb-3">
                {href ? (
                    <Link
                        href={href}
                        className="no-underline text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    >
                        {title}
                    </Link>
                ) : (
                    title
                )}
            </h3>

            <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                {description}
            </p>

            {details.length > 0 && (
                <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-1 mb-4">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            )}

            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
}
