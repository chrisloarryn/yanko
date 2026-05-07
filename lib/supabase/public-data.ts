import type { ContentCategory, Project, Service } from "@/lib/types/content";

export type SupabaseProjectRow = {
  id: string;
  title: string;
  slug: string;
  category: ContentCategory;
  location: string | null;
  excerpt: string | null;
  description: string | null;
  cover_image_url: string | null;
  gallery: string[] | null;
  features: string[] | null;
  is_featured: boolean | null;
  is_published: boolean | null;
  sort_order: number | null;
};

export type SupabaseServiceRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  description: string | null;
  benefits: string[] | null;
  process: string[] | null;
  icon: string | null;
  is_published: boolean | null;
  sort_order: number | null;
};

export function mapProject(row: SupabaseProjectRow): Project {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category,
    location: row.location ?? "",
    excerpt: row.excerpt ?? "",
    description: row.description ?? "",
    coverImageUrl: row.cover_image_url ?? undefined,
    gallery: row.gallery ?? [],
    features: row.features ?? [],
    isFeatured: Boolean(row.is_featured),
    isPublished: Boolean(row.is_published),
    sortOrder: row.sort_order ?? 0,
  };
}

export function mapService(row: SupabaseServiceRow): Service {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? "",
    description: row.description ?? "",
    benefits: row.benefits ?? [],
    process: row.process ?? [],
    icon: row.icon ?? "Servicio",
    isPublished: Boolean(row.is_published),
    sortOrder: row.sort_order ?? 0,
  };
}
