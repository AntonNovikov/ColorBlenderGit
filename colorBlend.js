const gElems = document.querySelectorAll(".blend");
// const gElems = document.querySelector(".blend");
console.log(gElems);
// gElems.classList.toggle("blend");
function change() {
  console.log(gElems);
  for (gElem of gElems) {
    console.log(gElem);
    gElem.classList.toggle("blend");
  }
}
