export const text = ({ tag, title }) => {
  // ✅ Create the desired element
  const textComponent = document.createElement(tag);

  // ✅ Add a class for styling
  textComponent.classList.add("font");

  // ✅ Set the inner text
  textComponent.innerText = title;

  // ✅ Return the created element
  return textComponent;
};
