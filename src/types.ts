export interface Product {
  id: string;
  name: string;
  category: 'composites' | 'tools' | 'imaging';
  description: string;
  features: string[];
  specifications: Record<string, string>;
  imageUrl?: string;
  catalogRef: string;
  isFeatured?: boolean;
  origin: string;
}

export type CategoryKey = 'composites' | 'tools' | 'imaging';

export interface CategoryInfo {
  key: CategoryKey;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imagePlaceholder: string;
}

export function resolveImageUrl(url: string | undefined): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Clean leading dots and slashes, and replace spaces with %20
  const cleanPath = url.replace(/^\.?\/+/, '').replace(/ /g, '%20');
  
  // If running in browser, detect environment dynamically at runtime
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // Check if running on GitHub Pages (hostname contains 'github.io')
    if (hostname.endsWith('github.io')) {
      const pathname = window.location.pathname;
      const pathSegments = pathname.split('/').filter(Boolean);
      
      // If the first segment of the path is the repo name (not 'images' or 'assets')
      if (pathSegments.length > 0 && pathSegments[0] !== 'images' && pathSegments[0] !== 'assets') {
        return `/${pathSegments[0]}/${cleanPath}`;
      }
    }
  }
  
  // Default to absolute path from root, which is extremely robust on Vercel, Custom Domains, and AI Studio
  return `/${cleanPath}`;
}

