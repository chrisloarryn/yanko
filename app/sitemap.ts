import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import { constructionSystems } from "@/lib/data/systems";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changefreq: "weekly" as const, priority: 1.0 },
    { url: absoluteUrl("/nosotros/"), lastModified: now, changefreq: "monthly" as const, priority: 0.9 },
    { url: absoluteUrl("/servicios/"), lastModified: now, changefreq: "weekly" as const, priority: 0.9 },
    { url: absoluteUrl("/sistemas-de-construccion/"), lastModified: now, changefreq: "monthly" as const, priority: 0.8 },
    { url: absoluteUrl("/proyectos/"), lastModified: now, changefreq: "weekly" as const, priority: 0.9 },
    { url: absoluteUrl("/contacto/"), lastModified: now, changefreq: "monthly" as const, priority: 0.8 },
    ...services.map((service) => ({ 
      url: absoluteUrl(`/servicios/${service.slug}/`), 
      lastModified: now, 
      changefreq: "monthly" as const, 
      priority: 0.7 
    })),
    ...constructionSystems.map((system) => ({ 
      url: absoluteUrl(`/sistemas-de-construccion/${system.slug}/`), 
      lastModified: now, 
      changefreq: "monthly" as const, 
      priority: 0.7 
    })),
    ...projects.map((project) => ({ 
      url: absoluteUrl(`/proyectos/${project.slug}/`), 
      lastModified: now, 
      changefreq: "monthly" as const, 
      priority: 0.6 
    })),
  ];
}
