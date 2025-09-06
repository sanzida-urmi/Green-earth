const categoriesContainer = document.getElementById("categoriesContainer");
const loadCategories =()=> {
    fetch('https://openapi.programming-hero.com/api/categories')
    .then((res) => res.json())
    .then((data) => showCategories(data.categories
))
    .catch((err) => {
        console.log(err);
    })
}

const showCategories = (categories) => {
console.log(categories);
categories.forEach(category => {
    categoriesContainer.innerHTML += `
<p class="hover:bg-[#cff0dc] hover:rounded-sm">${category.category_name}</p>
`
}
)
};


loadCategories();