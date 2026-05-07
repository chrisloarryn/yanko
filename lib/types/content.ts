export type ContentCategory = "construccion" | "remodelaciones" | "ampliaciones";

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: ContentCategory;
  location: string;
  excerpt: string;
  description: string;
  coverImageUrl?: string;
  gallery: string[];
  features: string[];
  isFeatured: boolean;
  isPublished: boolean;
  sortOrder: number;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  benefits: string[];
  process: string[];
  icon: string;
  isPublished: boolean;
  sortOrder: number;
};

export type ConstructionSystem = Service & {
  suitableFor: string[];
};

export type SiteMetric = {
  label: string;
  value: string;
};

export type SiteValue = {
  title: string;
  description: string;
};
