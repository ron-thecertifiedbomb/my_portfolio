import { text } from "../components/text.js";
export const nav = document.createElement("nav");

nav.classList.add("nav");
const container = document.createElement("content");
container.classList.add('content_container')

const logoContainer = document.createElement("section")
    const logoTitle = text({
      tag: "h2",
      title: "RS",
    });
const linkContainer = document.createElement("section");
linkContainer.classList.add("link_container")

const ul = document.createElement("ul");


["Projects", "Contact"].forEach((item) => {
  
  const li = document.createElement("li");
  li.innerHTML = `<a href="${item.toLowerCase()}.html">${item}</a>`;

  // ✅ Add styles to <li> and <a>
  li.style.margin = "0 15px";
  li.querySelector("a").style.textDecoration = "none";
  li.querySelector("a").style.color = "#fff";
  li.querySelector("a").style.fontFamily = "Arial, sans-serif";
  li.querySelector("a").style.fontWeight = "bold";
  li.querySelector("a").style.padding = "8px 12px";
  li.querySelector("a").style.borderRadius = "5px";
  li.querySelector("a").style.transition = "background 0.3s";

  // ✅ Add hover effect
  li.querySelector("a").addEventListener("mouseenter", () => {
    li.querySelector("a").style.backgroundColor = "";
  });
  li.querySelector("a").addEventListener("mouseleave", () => {
    li.querySelector("a").style.backgroundColor = "transparent";
  });

  ul.appendChild(li);
});








ul.style.display = "flex";
ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.margin = "0";

// ✅ Add the list to the nav
container.appendChild(logoContainer);
container.appendChild(linkContainer);
logoContainer.appendChild(logoTitle)
linkContainer.appendChild(ul);
nav.appendChild(container);
