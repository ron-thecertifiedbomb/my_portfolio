import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiGraphql,
  SiCss,
  SiMobx,
  SiFirebase,
} from "@icons-pack/react-simple-icons";

interface Tech {
  label: string;
  icon: React.ReactNode;
  url?: string;
}

export const techStack: Tech[] = [
  {
    label: "ReactJS",
    icon: <SiReact className="text-blue-400" />,
    url: "https://reactjs.org/",
  },
  {
    label: "React Native",
    icon: <SiReact className="text-cyan-400" />,
    url: "https://reactnative.dev/",
  },
  {
    label: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "TailwindCSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    url: "https://nextjs.org/",
  },
  {
    label: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Redux",
    icon: <SiRedux className="text-purple-600" />,
    url: "https://redux.js.org/",
  },
  {
    label: "Supabase",
    icon: <SiSupabase className="text-green-400" />,
    url: "https://supabase.com/",
  },
  {
    label: "Expo",
    icon: <SiExpo className="text-purple-500" />,
    url: "https://expo.dev/",
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs className="text-green-600" />,
    url: "https://nodejs.org/",
  },
  {
    label: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    url: "https://www.javascript.com/",
  },
  {
    label: "HTML5",
    icon: <SiHtml5 className="text-orange-500" />,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "GraphQL",
    icon: <SiGraphql className="text-pink-500" />,
    url: "https://graphql.org/",
  },
  {
    label: "CSS",
    icon: <SiCss className="text-blue-500" />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "MobX",
    icon: <SiMobx className="text-purple-400" />,
    url: "https://mobx.js.org/",
  },
  {
    label: "Firebase",
    icon: <SiFirebase className="text-yellow-500" />,
    url: "https://firebase.google.com/",
  },
];
