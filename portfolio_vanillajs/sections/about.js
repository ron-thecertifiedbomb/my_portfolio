
import { drawer } from "./drawer.js";
// ✅ Insert the nav at the top of the body
import customButton from "./button.js";
document.body.insertBefore(drawer, document.body.firstChild);
// ✅ Create a paragraph element
const main = document.querySelector("main")
const paragraph = document.createElement("p");


// ✅ Add text content to the paragraph
paragraph.innerText =
  "Welcome to the About page! This page provides information about our website and team.";

// ✅ Style the paragraph (optional)
paragraph.style.fontSize = "18px";
paragraph.style.color = "#333";
paragraph.style.lineHeight = "1.6";
paragraph.style.marginTop = "20px";

// ✅ Handle drawer toggle
let status = false;
const handleToggle = () => {
  status = !status;
  drawer.style.left = status ? "0px" : "-1000px";
};

const button = customButton("Toggle Drawer", handleToggle);
main.insertBefore(button, main.lastElementChild?.nextSibling || null); 
// ✅ Check if the element exists before appending
if (main) {
  main.appendChild(paragraph);
  console.log("✅ Paragraph added successfully!");
} else {
  console.error("❌ Element with ID 'about' not found!");
}

