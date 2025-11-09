// ✅ Imports
import { text } from "../components/text.js";
import { getProfileData } from "../lib/getProfileData.js";

// ✅ Create wrapper and main section
export const contact = document.createElement("div");

const container = document.createElement("div");
container.classList.add("container");
contact.appendChild(container);



async function renderContact() {
  try {
    const info = await getProfileData();
    const emailElement = text({
      tag: "p",
      title: `email:  ${info.contact?.email || "N/A"}`,
    });
    const phoneElement = text({
      tag: "p",
      title: `phone: ${info.contact?.phone || "N/A"}`,
    });
    const githubElement = text({
      tag: "p",
      title: `github: ${info.contact?.github || "N/A"}`,
    });
    const linkedinElement = text({
      tag: "p",
      title: `linkedIn: ${info.contact?.linkedin || "N/A"}`,
    });
    const portfolioElement = text({
      tag: "p",
      title: `portfolio: ${info.contact?.portfolio || "N/A"}`,
    });
    const websiteElement = text({
      tag: "p",
      title: `website: ${info.contact?.website || "N/A"}`,
    });

    // ✅ Append all elements
    container.appendChild(emailElement);
    container.appendChild(phoneElement);
    container.appendChild(githubElement);
    container.appendChild(linkedinElement);
    container.appendChild(portfolioElement);
    container.appendChild(websiteElement);
  } catch (error) {
    console.error("❌ Error rendering contact:", error);
    container.textContent = "Error loading contact data.";
  }
}

// ✅ Run on load
renderContact();
