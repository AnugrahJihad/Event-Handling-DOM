const hoverBtn = document.getElementById("hoverBtn");
const changeText = document.getElementById("hoverText");

hoverBtn.addEventListener("mouseover", function() {
    hoverText.textContent = "Mouse is over the button!";
});

hoverText.addEventListener("mouseout", function() {
    hoverText.textContent = "Hover over that button!";
});