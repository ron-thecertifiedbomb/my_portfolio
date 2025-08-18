
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
    <div className="flex items-center gap-2 ">
      <Link to="/">
        <Avatar className="w-9 h-9 "> {/* standard navbar size with padding */}
          <AvatarImage
            src={data.publicUrl}
            alt="logo"
            className="w-full h-full object-contain" // no rounded corners
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}
