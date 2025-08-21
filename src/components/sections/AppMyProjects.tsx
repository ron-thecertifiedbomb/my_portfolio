import { useEffect, useState } from "react";
import {
  AppContentContainer,
} from "@/components/layout";
import { fetchMyProjectsData } from "@/hooks/fetchHeroData";
import { AppLabel, AppExploreCards } from "@/components/common";


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
    <AppContentContainer className="p-4 sm:p-6 lg:p-8">
      <AppLabel variant="h2" className="mb-4">
        My Projects
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
