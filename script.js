const categoriesContainer = document.getElementById("categoriesContainer");

const plantContainer = document.getElementById("plantContainer");

const allTree = document.getElementById("allTree");


const my =document.getElementById("my_modal_1");

const modalContainer = document.getElementById("modalContainer");

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
<p id="${category.id}" onclick="loadTreesByCategory(${category.id})" class="hover:bg-[#cff0dc] hover:rounded-sm cursor-pointer">${category.category_name}</p>
`
    }
    )
};


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
                    <button class="p-2 btn-block rounded-full bg-[#15803d]">Add to Cart</button>
                </div>
        `
    });
}

const loadTreesByCategory =(id)=> {
console.log(id);

fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then((res) => res.json())
        .then((data) => showAllTrees(data.plants))
        .catch((err) => {
            console.log(err);
        })

}

const openModal =(plant) => {
    console.log(plant);
    modalContainer.innerHTML = `
    <div>
             <h2                  class="font-semibold">${plant.name}</h2>

                     <div class="w-full aspect-square overflow-hidden rounded-lg">
                        <img src="${plant.image}" alt="Jackfruit Tree" class="w-full h-full object-cover">
                    </div>

                    <p><span>Category :</span>${plant.category}</p>
                    <p><span>Price :</span>${plant.price}</p>
                    <p><span>Description :</span>${plant.description}</p>
        </div>
    `
    my.showModal();
}
const tr =()=> {
    console.log("iuh")
}
loadCategories();
loadAllTrees();