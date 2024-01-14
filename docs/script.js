let resume = document.getElementById("resume");
let home = document.getElementById("home");
let contact = document.getElementById("contact");
let library = document.getElementById("library");
//TODO: add resource_lib and contact.
init();

function init() {
  home.style.display = "flex";
  resume.style.display = "none";
  contact.style.display = "none";
  library.style.display = "none";
}

function closeButtonOnClickHandler() {
  resume.style.display = "none";
  home.style.display = "flex"; //All buckets should use flex.
}

function navOnClickHandler(value) {
  let selectedElement = document.getElementById(value);

  resume.style.display = "none";
  home.style.display = "none";
  contact.style.display = "none";
  library.style.display = "none";
  selectedElement.style.display = "flex"; //all buckets should use flex.
}

// function pi(){
//come back to this:
// https://stackoverflow.com/questions/29525380/detecting-shift-command-click-on-chrome-browser-action-button
//}
