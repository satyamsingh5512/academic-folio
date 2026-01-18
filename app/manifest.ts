import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Satyam's Portfolio",
        short_name: 'Satyam',
        description: 'Machine Learning Engineer & CV Researcher Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0366d6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
