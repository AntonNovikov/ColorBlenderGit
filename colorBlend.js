const gElems = document.querySelectorAll(".blend");

console.log(gElems);

function change() {
  console.log(gElems);
  for (gElem of gElems) {
    console.log(gElem);
    gElem.classList.toggle("blend");
  }
}
