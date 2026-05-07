"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/site/cards";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mapProject, type SupabaseProjectRow } from "@/lib/supabase/public-data";
import type { ContentCategory, Project } from "@/lib/types/content";

type DynamicProjectGridProps = {
  initialProjects: Project[];
  category?: ContentCategory;
};

export function DynamicProjectGrid({ initialProjects, category }: DynamicProjectGridProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [source, setSource] = useState<"local" | "supabase">("local");

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      return;
    }
    const client = supabase;

    let ignore = false;

    async function loadProjects() {
      let query = client
        .from("projects")
        .select("id,title,slug,category,location,excerpt,description,cover_image_url,gallery,features,is_featured,is_published,sort_order")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });

      if (category) {
        query = query.eq("category", category);
      }

      const { data, error } = await query;

      if (!ignore && !error && data && data.length > 0) {
        setProjects((data as SupabaseProjectRow[]).map(mapProject));
        setSource("supabase");
      }
    }

    void loadProjects();

    return () => {
      ignore = true;
    };
  }, [category]);

  return (
    <>
      {source === "supabase" ? <p className="mt-6 text-center text-sm font-semibold text-construction-primary">Contenido actualizado desde Supabase.</p> : null}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </>
  );
}
