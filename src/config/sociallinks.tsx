import {
  SiGithub,
  SiFacebook,
  SiGoogle,
  SiX,
} from "@icons-pack/react-simple-icons";
import React from "react";

export const socials = [
  {
    label: "Facebook",
    url: "https://facebook.com/yourprofile",
    icon: () => <SiFacebook className="w-5 h-5 text-white" />,
  },
  {
    label: "GitHub",
    url: "https://github.com/ron-thecertifiedbomb",
    icon: () => <SiGithub className="w-5 h-5 text-white" />,
  },
  {
    label: "Gmail",
    url: "mailto:your-email@gmail.com",
    icon: () => <SiGoogle className="w-5 h-5 text-white" />,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: () => <SiX className="w-5 h-5 text-white" />,
  },
];
