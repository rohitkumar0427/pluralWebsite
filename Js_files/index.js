let hideDropdown = () => {
  var dropdowns = document.getElementsByClassName("dropDownContent");
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("showP")) {
      openDropdown.classList.remove("showP");
    }
  }
}

function showMenu() {
  // document.getElementsByTagName("body")[0].setAttribute("style", "background-color: black")
  document.getElementById("nav-menu").classList.toggle("show");
}
function showProducts() {
  let list = document.getElementById("productsDiv");
  let temp = true;
  if (list.classList.contains("showP")){
    temp = false;
  }
  hideDropdown();
  if(temp){
    document.getElementById("productsDiv").classList.toggle("showP");
  }
}
function showPlatform() {
  let list = document.getElementById("platformDiv");
  let temp = true;
  if (list.classList.contains("showP")) {
    temp = false;
  }
  hideDropdown();
  if(temp){
    document.getElementById("platformDiv").classList.toggle("showP");
  }
}
function showSignIn() {
  window.open("sign-up/singIn.html", "_top");
}
function showFor_individuals() {
  window.open("forIndividuals/individuals.html", "_top");
}

window.onclick = function (event) {
  if (!event.target.matches("li")) {
    hideDropdown();
    }
};

let slideNo = 0;
let box = document.getElementsByClassName("twitter");

let hideBoxes = (direction) => {
  for (let i = 0; i < box.length; i++) {
    box[i].classList.add("hide");
  }
};

let showBoxes = (direction) => {
  for (let i = 0; i < 3; i++) {
    if (slideNo == box.length) slideNo = 0;
    box[slideNo].classList.remove("hide");
    slideNo++;
  }
};

let prevFunction = () => {
  hideBoxes();
  showBoxes();
};
let nextFunction = () => {
  if (slideNo === 0) slideNo = box.length - 3;
  hideBoxes();
  showBoxes();
};

hideBoxes();
showBoxes();

// var x = window.matchMedia(("max-width: 720px, min-width: 480px"));
// console.log(x);
// myFunction(x);
// x.addListener(myFunction);
