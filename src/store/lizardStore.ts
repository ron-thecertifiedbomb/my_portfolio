import { create } from "zustand";
import { appData, AppData } from "@/config/appData";

interface LizardStoreState {
  appData: AppData;

  // Current active screen
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;

  // Hover states
  hoveredPanel?: string;
  setHoveredPanel: (panelKey?: string) => void;

  hoveredSkill?: string;
  setHoveredSkill: (skillType?: string) => void;

  // Selected project
  selectedProject?: string;
  setSelectedProject: (projectTitle?: string) => void;

  // Active panel (clicked)
  activePanel?: string;
  setActivePanel: (panelKey?: string) => void;
}

export const useLizardStore = create<LizardStoreState>((set) => ({
  appData,

  currentScreen: appData.introduction.screen,
  setCurrentScreen: (screen) => set({ currentScreen: screen }),

  hoveredPanel: undefined,
  setHoveredPanel: (panelKey) => set({ hoveredPanel: panelKey }),

  hoveredSkill: undefined,
  setHoveredSkill: (skillType) => set({ hoveredSkill: skillType }),

  selectedProject: undefined,
  setSelectedProject: (projectTitle) => set({ selectedProject: projectTitle }),

  activePanel: undefined,
  setActivePanel: (panelKey) => set({ activePanel: panelKey }),
}));
