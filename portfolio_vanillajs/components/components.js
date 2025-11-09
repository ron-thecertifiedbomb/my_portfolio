// components.js
export function createContainer() {
  const container = document.createElement("div");
  container.classList.add("container");

  const textWrapper = document.createElement("div");
  textWrapper.classList.add("textWrapper");

  container.appendChild(textWrapper);
  return { container, textWrapper };
}
