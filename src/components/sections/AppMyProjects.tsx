import { useEffect, useState } from "react";
import { AppExploreCards } from "@/components/common/AppExploreCards";
import {
  AppContentContainer,
} from "@/components/layout";
import { fadeIn } from "@/lib/motion";
import { fetchMyProjectsData } from "@/hooks/fetchHeroData";
import { AppLabel } from "@/components/common";


interface MyProject {
  id: number;
  imgurl: string;
  title: string;
  description: string;
}

export function AppProjects() {
  const [projects, setProjects] = useState<MyProject[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchMyProjectsData();
      setProjects(data);
      if (data.length) setActiveId(data[0].id); 
    }

    loadProjects();
  }, []);

  const handleClick = (id: string | number) => {
    setActiveId(Number(id));
  };

  if (!projects.length) return null; 

  return (
    <AppContentContainer>
      <AppLabel
        variant="h2"
        initial="hidden"
        animate="show"
        variants={fadeIn("up", "tween", 0.3, 1)}
      >
        About Me
      </AppLabel>
      <AppContentContainer className="flex flex-col sm:flex-row sm:items-center gap-4 overflow-x-auto scrollbar-hide h-[400px]">
        {projects.map((project, index) => (
          <AppExploreCards
            key={project.id}
            id={project.id}
            imgUrl={project.imgurl}
            title={project.title}
            description={project.description}
            index={index}
            active={activeId}
            handleClick={handleClick}
          />
        ))}
      </AppContentContainer>
    </AppContentContainer>
  );
}
