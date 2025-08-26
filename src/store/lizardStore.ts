import { create } from "zustand";
import { appData, AppData, Skill } from "@/config/appData";

interface LizardStoreState {
  // Full app data
  appData: AppData;

  // Current active screen
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;

  // Navigation panel visibility
  showPanel: boolean;
  setShowPanel: (value: boolean) => void;

  // Active panel key
  activePanel?: string;
  setActivePanel: (panelKey?: string) => void;

  // Skills
  skills: Skill[];
  hoveredSkill?: string;
  setHoveredSkill: (skillType?: string) => void;

  selectedSkillType?: string;
  setSelectedSkillType: (type?: string) => void;

  // Getter: filtered skills based on selected type
  getFilteredSkills: () => Skill[];

  // Selected project
  selectedProject?: string;
  setSelectedProject: (projectTitle?: string) => void;
}

export const useLizardStore = create<LizardStoreState>((set, get) => ({
  // Integrate appData
  appData,

  // Current screen
  currentScreen: appData.introduction.screen,
  setCurrentScreen: (screen) => set({ currentScreen: screen }),

  // Navigation panel visibility
  showPanel: false,
  setShowPanel: (value) => set({ showPanel: value }),

  // Active panel key
  activePanel: appData.navigationPanels[0].key,
  setActivePanel: (panelKey) => set({ activePanel: panelKey }),

  // Skills
  skills: appData.skills,
  hoveredSkill: undefined,
  setHoveredSkill: (skillType) => set({ hoveredSkill: skillType }),

  selectedSkillType: appData.skills[0].type,
  setSelectedSkillType: (type) => set({ selectedSkillType: type }),

  // Getter: filtered skills
  getFilteredSkills: () => {
    const { skills, selectedSkillType } = get();
    if (!selectedSkillType) return skills;
    return skills.filter((skill) => skill.type === selectedSkillType);
  },

  // Selected project
  selectedProject: undefined,
  setSelectedProject: (projectTitle) => set({ selectedProject: projectTitle }),
}));
