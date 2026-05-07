import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import { constructionSystems } from "@/lib/data/systems";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/nosotros", "/servicios", "/sistemas-de-construccion", "/proyectos", "/contacto"];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() })),
    ...services.map((service) => ({ url: absoluteUrl(`/servicios/${service.slug}`), lastModified: new Date() })),
    ...constructionSystems.map((system) => ({ url: absoluteUrl(`/sistemas-de-construccion/${system.slug}`), lastModified: new Date() })),
    ...projects.map((project) => ({ url: absoluteUrl(`/proyectos/${project.slug}`), lastModified: new Date() })),
  ];
}
