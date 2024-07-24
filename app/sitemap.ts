import { MetadataRoute } from 'next'
const HOST = 'https://browser-ai.tech'
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: HOST,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url:`${HOST}/chat`,
            priority: 1,
        },
        {
            url:`${HOST}/rag`,
            priority: 1,
        },
        {
            url:`${HOST}/translator`,
            priority: 1,
        },
        {
            url:`${HOST}/chrome/setup`,
            priority: 1,
        },
        {
            url:`${HOST}/policy`,
            priority: 0.1,
        },
        {
            url:`${HOST}/tos`,
            priority: 0.1,
        },
    ]
}