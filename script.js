const categoriesContainer = document.getElementById("categoriesContainer");

const plantContainer = document.getElementById("plantContainer");

const allTree = document.getElementById("allTree");


const my =document.getElementById("my_modal_1");

const modalContainer = document.getElementById("modalContainer");

const cartContainer =document.getElementById("cartContainer");

const totalContainer = document.getElementById("totalContainer");


const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((data) => showCategories(data.categories
        ))
        .catch((err) => {
            console.log(err);
        })
}

const showCategories = (categories) => {
    // console.log(categories);
    categories.forEach(category => {
        categoriesContainer.innerHTML += `
<p id="${category.id}" onclick="loadTreesByCategory(${category.id}) ; mark(this)" class="hover:bg-[#cff0dc] hover:rounded-sm cursor-pointer">${category.category_name}</p>
`
    }
    )
};


const mark =(item) => {
const allCategories = document.querySelectorAll("#categoriesContainer p");

allCategories.forEach(category => {
    category.classList.remove("bg-[#15803d]", "pointer-events-none")
    
});
item.classList.add("bg-[#15803d]", "pointer-events-none");

}

const loadAllTrees = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then((res) => res.json())
        .then((data) => showAllTrees(data.plants))
        .catch((err) => {
            console.log(err);
        })
}

const showAllTrees = (plants) => {
    // console.log(plants)
     plantContainer.innerHTML = "";
    plants.forEach(plant => {
        // console.log(plant);
        plantContainer.innerHTML += `
        <div class="p-3 space-y-3 rounded-sm bg-white flex flex-col justify-between h-full">
                    <div class="w-full aspect-square overflow-hidden rounded-lg">
                        <img src="${plant.image}" alt="Jackfruit Tree" class="w-full h-full object-cover">
                    </div>

                    <h2 onclick='openModal(${JSON.stringify(plant)})'
                     class="font-semibold cursor-pointer">${plant.name}</h2>
                    <p>${plant.description}</p>
                    <div class="flex justify-between">
                        <h3 class="text-[#15803d] bg-[#dcfce7] px-2 py-1  rounded-full">${plant.category}</h3>
                        <h2 class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</h2>
                    </div>
                    <button onclick="add(this.parentNode)" class="cursor-pointer p-2 btn-block rounded-full bg-[#15803d]">Add to Cart</button>
                </div>
        `
    });
}

const add =(item)=>{
let name = item.children[1].innerText;
let price = item.children[3].children[1].innerText;
priceArr.push(price);

cartContainer.innerHTML += `
<div class="bg-[#f0fdf4] flex items-center justify-between p-2">
                    <div>
                        <h2 class="font-semibold">${name}</h2>
                        <p class="text-[#8c8c8c] font-semibold">
                            <i class="fa-solid fa-bangladeshi-taka-sign"></i>${price}
                        </p>
                    </div>
                    <div>
                        <i onclick="cross(this.parentNode.parentNode)" class="fa-solid fa-xmark text-[#8c8c8c] cursor-pointer"></i>
                    </div>
                </div>
`
total(price);

}

const cross =(item) => {
    let price = item.children[0].children[1].innerText;
    const index = priceArr.indexOf(price);
    priceArr.splice(index,1)
console.log(priceArr);
item.remove();

total();
}

const priceArr = [];

const total = () => {

    let sum = 0;

    for (const pp of priceArr) {

        sum = sum + Number(pp);
    }

    if(sum === 0)
    {
        totalContainer.innerHTML = "";
    }

    else
    {
 totalContainer.innerHTML = `
    <div class="flex justify-between items-center font-semibold my-4">
                    <h1>Total :</h1>
                    <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i>${sum}</h1>
                </div>
    `
    }
   
}


const loadTreesByCategory =(id)=> {

fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then((res) => res.json())
        .then((data) => showAllTrees(data.plants))
        .catch((err) => {
            console.log(err);
        })

}

const openModal =(plant) => {
    // console.log(plant);
    modalContainer.innerHTML = `
    <div class="space-y-3">
             <h2                  class="font-semibold">${plant.name}</h2>

                     <div class= "w-[250px] h-[250px] mx-auto overflow-hidden rounded-lg">
                        <img src="${plant.image}" alt="Jackfruit Tree" class="w-full h-full object-cover">
                    </div>

                    <p><span class="font-semibold">Category :</span>${plant.category}</p>
                    <p><span class="font-semibold">Price :</span>${plant.price}</p>
                    <p><span class="font-semibold">Description :</span>${plant.description}</p>
        </div>
    `
    my.showModal();
}
const tr =()=> {
    // console.log("iuh")
}
loadCategories();
loadAllTrees();