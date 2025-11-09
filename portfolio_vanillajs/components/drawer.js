// ✅ Create drawer element
export const drawer = document.createElement("aside");
drawer.classList.add("drawer");

// ✅ Create container and list
const container = document.createElement("div");
container.classList.add("drawerWrapper");
const ul = document.createElement("ul");

// ✅ Define links
const links = ["Home", "About", "Contact"];
links.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${item.toLowerCase()}.html">${item}</a>`;
  li.style.color = "black";
  // ✅ Set <a> text color to black
  const anchor = li.querySelector("a");
  anchor.style.color = "black"; // Correctly apply to <a>

  ul.appendChild(li);
});

// ✅ Drawer styles
drawer.style.maxWidth = "350px";
drawer.style.width = "100%";
drawer.style.maxHeight = "100vh";
drawer.style.height = "100%";
drawer.style.position = "fixed"; // Fixed for better placement
drawer.style.left = "-1000px"; // Hidden initially
drawer.style.top = "0";
drawer.style.zIndex = 99;
drawer.style.backgroundColor = "white";
drawer.style.transition = "left 0.4s ease-in-out"; // ✅ Smooth transition

// ✅ Append container and list to drawer
drawer.appendChild(container);
container.appendChild(ul);
