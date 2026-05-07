"use client";

import { useEffect, useState } from "react";
import { ServiceCard } from "@/components/site/cards";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mapService, type SupabaseServiceRow } from "@/lib/supabase/public-data";
import type { Service } from "@/lib/types/content";

export function DynamicServiceGrid({ initialServices }: { initialServices: Service[] }) {
  const [services, setServices] = useState(initialServices);
  const [source, setSource] = useState<"local" | "supabase">("local");

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      return;
    }
    const client = supabase;

    let ignore = false;

    async function loadServices() {
      const { data, error } = await client
        .from("services")
        .select("id,title,slug,excerpt,description,benefits,process,icon,is_published,sort_order")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });

      if (!ignore && !error && data && data.length > 0) {
        setServices((data as SupabaseServiceRow[]).map(mapService));
        setSource("supabase");
      }
    }

    void loadServices();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {source === "supabase" ? <p className="mt-6 text-center text-sm font-semibold text-construction-primary">Contenido actualizado desde Supabase.</p> : null}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
      </div>
    </>
  );
}
