let thrivingList = [];
let strugglingList = [];

// thrivingList.push({ name: "plant 1" });

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thrivingCount");
let strugllingCount = document.getElementById("strugglingCount");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");

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
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white", "rounded-xl");

  if (id == "thriving-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  }
}

// mainContainer.addEventListener("click", function (event) {
//   if (event.target.classList.contains("thrivng-btn")) {
//     const parentNode = event.target.parentNode.parentNode;
//     const plantName = parentNode.querySelector(".plantName").innerText;
//     const latingName = parentNode.querySelector(".latinName").innerText;
//     const light = parentNode.querySelector(".light").innerText;
//     const water = parentNode.querySelector(".water").innerText;
//     const status = parentNode.querySelector(".status").innerText;
//     const notes = parentNode.querySelector(".notes").innerText;

//     const cardInfo = {
//       plantName,
//       latingName,
//       light,
//       water,
//       status,
//       notes,
//     };

//     const plantExist = thrivingList.find(
//       (item) => item.plantName == cardInfo.plantName,
//     );

//     if (!plantExist) {
//       thrivingList.push(cardInfo);
//     }
//     renderThriving();
//   }

//   function renderThriving() {
//     filterSection.innerHTML = "";

//     for (let thrive of thrivingList) {
//       let div = document.createElement("div");
//       console.log(thrive);
//       div.className =
//         "card flex justify-between border p-8 rounded-xl bg-gray-200 border-none shadow-amber-100";
//       div.innerHTML = `
//       <div class="space-y-6">

//                     <div>
//                         <p class="plantName text-4xl">Plant Name 1</p>
//                         <p class="latinName">Lating Name</p>
//                     </div>

//                     <div class="flex gap-2">
//                         <p class="light bg-gray-300 px-5">Bright Indicate</p>
//                         <p class="water bg-gray-300 px-5">Weekly</p>
//                     </div>

//                     <p class="status">Not Applicable</p>
//                     <p class="notes">New leaf unfurling by the east window</p>

//                     <div class="flex gap-5">
//                         <button class="thrivng-btn bg-green-200 px-4 py-2 rounded-xl">Thrive</button>
//                         <button class="struggle-btn bg-red-200 px-4 py-2 rounded-xl">Struggle</button>
//                     </div>
//                 </div>

//         `;
//     }
//   }
// });

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("thrivng-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector(".plantName").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    //    console.log(plantName, light, water, status, notes);
    parentNode.querySelector(".status").innerText = "Thrive";
    const cardInfo = {
      plantName,
      light,
      water,
      status: "Thrive",
      notes,
    };
    const plantExist = thrivingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    if (!plantExist) {
      thrivingList.push(cardInfo);
    }

    renderThriving();
    calculateCount();
  }

  else if (event.target.classList.contains("struglling-filter-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector(".plantName").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    //    console.log(plantName, light, water, status, notes);
    parentNode.querySelector(".status").innerText = "Struggle";
    const cardInfo = {
      plantName,
      light,
      water,
      status: "Struggle",
      notes,
    };
    const plantExist = strugglingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    if (!plantExist) {
      strugglingList.push(cardInfo);
    }

    calculateCount();
    renderStruggling();
    
  }
});

function renderThriving() {
  filterSection.innerHTML = "";
  for (let thrive of thrivingList) {
    console.log(thrive);

    let div = document.createElement("div");
    div.className =
      "card flex justify-between border p-8 rounded-xl bg-gray-200 border-none shadow-amber-100 mt-4 mb-4";
    div.innerHTML = `
     <div class="space-y-6">
                    
                    <div>
                        <p class="plantName text-4xl">${thrive.plantName}</p>
                        <p class="latinName">Lating Name</p>
                    </div>

                
                    <div class="flex gap-2">
                        <p class="light bg-gray-300 px-5">Bright Indicate</p>
                        <p class="water bg-gray-300 px-5">Weekly</p>
                    </div>
                   
                    <p class="status">${thrive.status}</p>
                    <p class="notes">New leaf unfurling by the east window</p>

                    <div class="flex gap-5">
                        <button class="thrivng-btn bg-green-200 px-4 py-2 rounded-xl">Thrive</button>
                        <button class="struggle-btn bg-red-200 px-4 py-2 rounded-xl">Struggle</button>
                    </div>
    
    `;
    filterSection.appendChild(div);
  }
}


function renderStruggling() {
  filterSection.innerHTML = "";
  for (let struggle of strugglingList) {
    console.log(struggle);

    let div = document.createElement("div");
    div.className =
      "card flex justify-between border p-8 rounded-xl bg-gray-200 border-none shadow-amber-100 mt-4 mb-4";
    div.innerHTML = `
     <div class="space-y-6">
                    
                    <div>
                        <p class="plantName text-4xl">${struggle.plantName}</p>
                        <p class="latinName">Lating Name</p>
                    </div>

                
                    <div class="flex gap-2">
                        <p class="light bg-gray-300 px-5">Bright Indicate</p>
                        <p class="water bg-gray-300 px-5">Weekly</p>
                    </div>
                   
                    <p class="status">${struggle.status}</p>
                    <p class="notes">New leaf unfurling by the east window</p>

                    <div class="flex gap-5">
                        <button class="thrivng-btn bg-green-200 px-4 py-2 rounded-xl">Thrive</button>
                        <button class="struggle-btn bg-red-200 px-4 py-2 rounded-xl">Struggle</button>
                    </div>
    
    `;
    filterSection.appendChild(div);
  }
}

