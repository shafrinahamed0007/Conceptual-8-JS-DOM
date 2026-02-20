// const header = document.getElementById("header");
// console.log(header);

const header = document.querySelector("#header");
// console.log(header.innerText);
header.innerText = "I've changed it";

const para = document.getElementsByClassName("text");
// console.log(para);

const texts = document.querySelectorAll(".text");
for (const text of texts) {
  // text.innerText = "Issa"
}

// texts[0].classList.add("hidden");
// texts[1].classList.add("highlight")

// texts[0].classList.remove("hidden");

const btnHandle = document.getElementById("btn-handle");
btnHandle.addEventListener("click", function () {
  texts[0].classList.remove("hidden");
  texts[0].classList.add("highlight");
});

const box = document.getElementById("box");
box.innerHTML = "<p>Hello</p>";

const container = document.getElementById("container");
const div = document.createElement("div");
// container.appendChild(div);

let name = "Rahim";

div.innerHTML = `
 <p>${name}</p>
        <button>Click Me</button>`;

container.appendChild(div);

const delegation = document.getElementById("body");
delegation.addEventListener("click", function (event) {
  console.log(event.target.parentNode);
});

let arr = [1, 2, 5, 7, 5];
const findmethod = arr.find((item) => item == 5);
console.log(findmethod);

const filterMethod = arr.filter((item) => item != 7);
console.log(filterMethod);
arr = filterMethod;
console.log(arr)

