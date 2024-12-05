const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener("click", function() {
    const createElment = document.createElement("li");
    createElment.textContent = itemInput.value;
    itemList.innerHTML += `<li>${itemInput.value}</li>`;
    itemInput.value = "";
});
