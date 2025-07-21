// Variables
const select = document.querySelector(".select");
const selectText = document.querySelector(".select p");
const selectIcon = document.querySelector(".select i");
const selectionsContainer = document.querySelector(".selections");
const selections = document.querySelectorAll(".selections > div");
// End of variables

// Functions

// Show and hide menu
function dropDownMenu() {
  // Rotate the arrow , Show and hide selections
  selectIcon.classList.toggle("rotate");
  selectionsContainer.classList.toggle("active");
}
// Change select box text content based on the clicked element from selections
function changeContent(e) {
  if (e.target.classList.contains("social")) {
    selectText.textContent = e.target.getAttribute("text");
  } else selectText.textContent = e.target.parentElement.getAttribute("text");
  dropDownMenu();
}
// End of functions

selections.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    changeContent(e);
  });
});
