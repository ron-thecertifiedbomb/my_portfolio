
import { supabase } from "@/lib/supabase";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AppLogo() {
  const { data } = supabase
    .storage
    .from("portfolio-assets")
    .getPublicUrl("logo.png");
  
  console.log("Logo URL:", data.publicUrl);

  return (
    <div className="flex items-center gap-2">
      <Avatar className="hidden md:h-9 md:w-12 md:flex p-1">
        <AvatarImage src={data.publicUrl} alt="logo" />
        <AvatarFallback className="rounded-lg">SC</AvatarFallback>
      </Avatar>
    </div>
  );
}
