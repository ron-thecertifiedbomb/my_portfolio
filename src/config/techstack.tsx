import { SiMongodb, SiNextdotjs, SiReact, SiRedux, SiSupabase, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";


interface Tech {
    label: string;
    icon: React.ReactNode;
    url?: string; // optional link to tech website
}


export const techStack: Tech[] = [
    { label: "ReactJS", icon: <SiReact className="w-6 h-6 text-blue-400" />, url: "https://reactjs.org/" },
    { label: "React Native", icon: <SiReact className="w-6 h-6 text-cyan-400" />, url: "https://reactnative.dev/" },
    { label: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-600" />, url: "https://www.typescriptlang.org/" },
    { label: "TailwindCSS", icon: <SiTailwindcss className="w-6 h-6 text-teal-400" />, url: "https://tailwindcss.com/" },
    { label: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" />, url: "https://nextjs.org/" },
    { label: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" />, url: "https://www.mongodb.com/" },
    { label: "Redux", icon: <SiRedux className="w-6 h-6 text-purple-600" />, url: "https://redux.js.org/" },
    { label: "Supabase", icon: <SiSupabase className="w-6 h-6 text-green-400" />, url: "https://supabase.com/" },
];
