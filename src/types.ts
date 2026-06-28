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
  
  // Return the relative path. It works perfectly on:
  // 1. Local development (http://localhost:3000/images/products/...)
  // 2. Vercel / Custom Domain (https://nordic-group.com/images/products/...)
  // 3. GitHub Pages subpaths (https://username.github.io/repo-name/images/products/...)
  // Since this is a single-page app (SPA) with hash routing (#), the base directory path never changes.
  return cleanPath;
}

