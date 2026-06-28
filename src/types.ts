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
  
  // Check if running on GitHub Pages: hostname contains 'github.io'
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.endsWith('github.io');
  if (isGitHubPages) {
    const pathname = window.location.pathname;
    const parts = pathname.split('/').filter(Boolean);
    // If the first segment is not 'images' or 'assets', it is likely the repo name
    if (parts.length > 0 && parts[0] !== 'images' && parts[0] !== 'assets') {
      return `/${parts[0]}/${cleanPath}`;
    }
  }
  
  return `/${cleanPath}`;
}

