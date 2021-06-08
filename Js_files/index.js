function showMenu() {
  // document.getElementsByTagName("body")[0].setAttribute("style", "background-color: black")
  document.getElementById("nav-menu").classList.toggle("show");
}
function showProducts() {
  document.getElementById("productsDiv").classList.toggle("showProductDiv");
}
function showPlatform() {
  document.getElementById("platformDiv").classList.toggle("showPlatformDiv");
}
function showSignIn() {
  window.open("sign-up/singIn.html", "_top");
}
function showFor_individuals() {
  window.open("forIndividuals/individuals.html", "_top");
}
