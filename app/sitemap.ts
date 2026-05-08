import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import { constructionSystems } from "@/lib/data/systems";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: absoluteUrl("/nosotros/"), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: absoluteUrl("/servicios/"), lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: absoluteUrl("/sistemas-de-construccion/"), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: absoluteUrl("/proyectos/"), lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: absoluteUrl("/contacto/"), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    ...services.map((service) => ({ 
      url: absoluteUrl(`/servicios/${service.slug}/`), 
      lastModified: now, 
      changeFrequency: "monthly" as const, 
      priority: 0.7 
    })),
    ...constructionSystems.map((system) => ({ 
      url: absoluteUrl(`/sistemas-de-construccion/${system.slug}/`), 
      lastModified: now, 
      changeFrequency: "monthly" as const, 
      priority: 0.7 
    })),
    ...projects.map((project) => ({ 
      url: absoluteUrl(`/proyectos/${project.slug}/`), 
      lastModified: now, 
      changeFrequency: "monthly" as const, 
      priority: 0.6 
    })),
  ];
}
