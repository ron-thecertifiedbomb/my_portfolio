
import { supabase } from "@/lib/supabase";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from 'react-router-dom'

export function AppLogo() {
  const { data } = supabase
    .storage
    .from("portfolio-assets")
    .getPublicUrl("logo.png");
  
  console.log("Logo URL:", data.publicUrl);

  return (
    <div className="flex items-center gap-2">
      <Link to="/">
      <Avatar className="hidden md:h-9 md:w-12 md:flex">
        <AvatarImage src={data.publicUrl} alt="logo" />
        <AvatarFallback className="rounded-lg">SC</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}
