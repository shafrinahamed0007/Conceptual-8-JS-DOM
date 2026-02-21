let thrivingList = [];
let strugglingList = [];

thrivingList.push({ name: "plant 1" });

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thrivingCount");
let strugllingCount = document.getElementById("strugglingCount");

const allCardSection = document.getElementById("allCards");

const mainContainer = document.querySelector("main");

function calculateCount() {
  total.innerText = allCardSection.children.length;
  thrivingCount.innerText = thrivingList.length;
  strugllingCount.innerText = strugglingList.length;
}

calculateCount();

// const allFilterBtn = document.getElementById("all-filter-btn");
// allFilterBtn.addEventListener("click", function(){
//     alert("Click from add even")
// })

const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingFilterBtn = document.getElementById("thriving-filter-btn");
const strugglingFilterBtn = document.getElementById("struglling-filter-btn");

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-black", "text-white");
  thrivingFilterBtn.classList.remove("bg-black", "text-white");
  strugglingFilterBtn.classList.remove("bg-black", "text-white");

  allFilterBtn.classList.add("bg-gray-300", "text-black");
  thrivingFilterBtn.classList.add("bg-gray-300", "text-black");
  strugglingFilterBtn.classList.add("bg-gray-300", "text-black");

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-300", "text-black")
  selected.classList.add("bg-black", "text-white", "rounded-md");
}
