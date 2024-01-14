let resume = document.getElementById("resume");
let home = document.getElementById("home");

//TODO: add resource_lib and contact.

home.style.display = "none";
function closeButtonOnClickHandler() {
  resume.style.display = "none";
  home.style.display = "flex"; //All buckets should use flex.
}

function navOnClickHandler(value) {
  let selectedElement = document.getElementById(value);

  resume.style.display = "none";
  home.style.display = "none";
  selectedElement.style.display = "flex"; //all buckets should use flex.
}
