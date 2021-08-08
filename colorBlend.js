const gElems = document.querySelectorAll(".blend");
function change() {
  console.log(gElems);
  for (gElem of gElems) {
    gElem.classList.toggle("blend");
  }
}
