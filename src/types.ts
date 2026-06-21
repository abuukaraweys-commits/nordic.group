export interface Product {
  id: string;
  name: string;
  category: 'composites' | 'tools' | 'imaging' | 'collections';
  description: string;
  features: string[];
  specifications: Record<string, string>;
  imageUrl?: string;
  catalogRef: string;
  isFeatured?: boolean;
  origin: string;
}

export type CategoryKey = 'composites' | 'tools' | 'imaging' | 'collections';

export interface CategoryInfo {
  key: CategoryKey;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imagePlaceholder: string;
}
