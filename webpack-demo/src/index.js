import "./css/index.css";
function toggle() {
  let element = document.getElementById("hello");
  if (element.classList.contains("visible")) {
    element.classList.remove("visible");
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
    element.classList.add("visible");
  }
}
window.toggle = toggle();
