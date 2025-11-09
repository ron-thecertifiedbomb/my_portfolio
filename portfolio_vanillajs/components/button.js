 // ✅ Improved customButton function
const customButton = (title, updateTitleColor) => {
  // ✅ Create button element
  const button = document.createElement("button");
  button.classList.add("myButton"); // Add class
  button.innerText = title; // Set button text

  // ✅ Style the button dynamically
  button.style.backgroundColor = "#0f942c";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.padding = "10px 20px";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.fontWeight = "bold";
  button.style.transition = "background 0.3s ease";
  button.style.outline = "none";

  // ✅ Add hover effect
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#0c7c22"; // Darker green on hover
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#0f942c"; // Revert on leave
  });

  // ✅ Add click event listener to toggle colors
  button.addEventListener("click", () => {
    updateTitleColor();
  });

  // ✅ Return the button so it can be appended later
  return button;
};

export default customButton;
