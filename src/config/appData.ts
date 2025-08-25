export interface NavigationPanel {
  key: string;
  heading: string;
  content: string;
  screen: string;
}

export interface Skill {
  type: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface AboutMe {
  heading: string;
  description: string;
  screen: string;
}

export interface AppData {
  navigationPanels: NavigationPanel[];
  skills: Skill[];
  aboutme: AboutMe;
}

export const appData: AppData = {
  navigationPanels: [
    {
      key: "introduction",
      heading: "Introduction",
      content:
        "I am a creative and passionate individual with a strong love for learning.",
      screen: "IntroductionScreen",
    },
    {
      key: "projects",
      heading: "Projects",
      content: "Check out my projects",
      screen: "ProjectsScreen",
    },
    {
      key: "skills",
      heading: "Skills & Craftmanship",
      content: "What I offer & technologies I work with",
      screen: "SkillsScreen",
    },
    {
      key: "aboutme",
      heading: "About Me",
      content:
        "I am a dedicated professional with a passion for delivering high-quality services to my clients.",
      screen: "AboutMeScreen",
    },
  ],

  skills: [
    {
      type: "Web Development",
      imageSrc: "/assets/cardimg.png",
      imageAlt: "Laptop with code editor",
      title: "Web Development",
      description:
        "Building modern, responsive websites using React, Next.js, and TailwindCSS.",
    },
    {
      type: "Mobile Development",
      imageSrc: "/assets/cardimg1.png",
      imageAlt: "Mobile app interface",
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile apps with React Native for both iOS and Android.",
    },
    {
      type: "Fullstack Application",
      imageSrc: "/assets/cardimg2.png",
      imageAlt: "Fullstack workflow diagram",
      title: "Fullstack Application",
      description:
        "Developing scalable fullstack applications with seamless frontend and backend integration.",
    },
    {
      type: "Video Editing",
      imageSrc: "/assets/cardimg3.png",
      imageAlt: "Video editing timeline",
      title: "Video Editing",
      description:
        "Producing high-quality video content with professional editing, transitions, and effects.",
    },
  ],

  aboutme: {
    heading: "About Me",
    description:
      "I am a creative and passionate individual with a strong love for learning. I thrive on exploring new ideas, embracing challenges, and constantly growing both personally and professionally.",
    screen: "AboutMeScreen",
  },
};
