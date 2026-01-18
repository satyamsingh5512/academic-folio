import Link from "next/link";

interface HeroProps {
    name: string;
    title: string;
    description: string;
    ctaPrimary?: { href: string; label: string };
    ctaSecondary?: { href: string; label: string };
}

export default function Hero({
    name,
    title,
    description,
    ctaPrimary = { href: "#projects", label: "View Projects" },
    ctaSecondary = { href: "/cv.pdf", label: "Download CV" },
}: HeroProps) {
    return (
        <section
            id="hero"
            className="section pt-28 md:pt-32"
            aria-labelledby="hero-heading"
        >
            <div className="container-narrow text-center">
                <h1
                    id="hero-heading"
                    className="text-4xl sm:text-6xl font-bold mb-6 text-gradient tracking-tight"
                >
                    {name}
                </h1>

                <p className="text-xl sm:text-2xl text-[var(--color-text-muted)] mb-8 font-light">
                    {title}
                </p>

                <p className="text-base sm:text-lg text-[var(--color-text)] max-w-2xl mx-auto mb-8 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={ctaPrimary.href} className="btn-primary no-underline">
                        {ctaPrimary.label}
                    </Link>
                    <Link
                        href={ctaSecondary.href}
                        className="btn-secondary no-underline"
                        target={ctaSecondary.href.endsWith(".pdf") ? "_blank" : undefined}
                        rel={ctaSecondary.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    >
                        {ctaSecondary.label}
                    </Link>
                </div>
            </div>
        </section>
    );
}
