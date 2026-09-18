import type { MetadataRoute } from 'next';
const base=process.env.NEXT_PUBLIC_SITE_URL||'https://rapidlyon.com';
export default function sitemap(): MetadataRoute.Sitemap { const now=new Date(); const paths=['','/work','/work/true-pay','/work/smart-trip','/work/umer-mobile','/services','/process','/about','/start-a-project','/privacy','/terms']; return paths.map((path,i)=>({url:`${base}${path}`,lastModified:now,changeFrequency:i<4?'monthly':'yearly',priority:path===''?1:path.startsWith('/work')?0.85:0.7})); }
