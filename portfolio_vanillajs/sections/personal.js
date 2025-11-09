import { text } from "../components/text.js";
import { getProfileData } from "../lib/getProfileData.js";

export const personal = document.createElement("div");

const container = document.createElement("div");
container.classList.add("container");
personal.appendChild(container);

async function renderPersonal() {
  try {
    const info = await getProfileData();
    const nameElement = text({
      tag: "h2",
      title: `Hi! I'm ${info.personal?.name || "Unknown"}`,
    });
    const titleElement = text({ tag: "h3", title: info.personal?.title });
   
    container.appendChild(nameElement);
    container.appendChild(titleElement);
 
  } catch (error) {
    console.error("❌ Error rendering profile:", error);
    container.textContent = "Error loading profile data.";
  }
}


renderPersonal();
