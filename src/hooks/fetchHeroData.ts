import { supabase } from "@/lib/supabase";


interface ScreensaverImage {
  src: string;
  alt?: string;
}

export async function fetchHeroImages(): Promise<ScreensaverImage[]> {
  const { data, error } = await supabase
    .from("hero_section_images")
    .select("id, image_url")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching hero images:", error);
    return [];
  }

  // Map image_url to { src } objects
  return data?.map((item) => ({ src: item.image_url })) ?? [];
}
/** Fetch hero quotes from hero_section_quotes table */
export async function fetchHeroQuotes(): Promise<
  { id: number; title: string; description: string }[]
> {
  const { data, error } = await supabase
    .from("hero_section_quotes")
    .select("id, title, description")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching hero quotes:", error);
    return [];
  }

  return data ?? [];
}
