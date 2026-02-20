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

const allFilterBtn = document.getElementById("all-filter-btn");


function toggleStyle(id){
    console.log("Clicked")
}
