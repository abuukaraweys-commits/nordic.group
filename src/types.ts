export interface Product {
  id: string;
  name: string;
  category: 'composites' | 'tools';
  description: string;
  features: string[];
  specifications: Record<string, string>;
  imageUrl?: string;
  catalogRef: string;
  isFeatured?: boolean;
  origin: string;
}

export type CategoryKey = 'composites' | 'tools';

export interface CategoryInfo {
  key: CategoryKey;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imagePlaceholder: string;
}
