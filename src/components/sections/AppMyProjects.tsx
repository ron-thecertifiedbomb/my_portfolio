import { useState } from "react";
import { AppExploreCards } from "@/components/common/AppExploreCards";
import { AppSectionMotionTitleContainer } from "@/components/layout";
import { fadeIn } from "@/lib/motion";
import { AppContentContainer } from "../layout/AppContentContainer";

interface Project {
  id: number;
  imgUrl: string;
  title: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creative Planet",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Code Odyssey",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UI Universe",
  },
  {
    id: 4,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1722686486500-9f54228769de?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Design Galaxy",
  },
];

export function AppProjects() {
  const [activeId, setActiveId] = useState<number | null>(mockProjects[0].id);

  const handleClick = (id: string | number) => {
    setActiveId(Number(id));
  };

  return (
    <AppContentContainer withPadding={true}>
      <AppSectionMotionTitleContainer
        title="My Projects"
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mb-6"
      />

      {/* Hide on small screens */}
      <AppContentContainer className="sm:flex items-center gap-4   overflow-x-auto scrollbar-hide ">
        {mockProjects.map((project, index) => (
          <AppExploreCards
            key={project.id}
            id={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            index={index}
            active={activeId}
            handleClick={handleClick}
          />
        ))}
      </AppContentContainer>
    </AppContentContainer>
  );
}
