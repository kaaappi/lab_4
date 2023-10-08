document.addEventListener("DOMContentLoaded", function () {
    const sixthElement = document.getElementById("sixth");
    let colorClasses = ["first-color", "second-color"];
    const n = (15 % 10) + 2;
    console.log(n)

    const selectedElement = document.querySelector(`body>:nth-child(${n})`);
    console.log(selectedElement)

    let currentColorIndexForFirst = 0;
    let currentColorIndexForSecond = 0;

    sixthElement.addEventListener("click", function () {
        currentColorIndexForFirst = (currentColorIndexForFirst + 1) % colorClasses.length;
        const newColorClass = colorClasses[currentColorIndexForFirst];

        sixthElement.classList.remove(...colorClasses);
        sixthElement.classList.add(newColorClass);
    });

    selectedElement.addEventListener("click", function () {
        currentColorIndexForSecond = (currentColorIndexForSecond + 1) % colorClasses.length;
        const newColorClass = colorClasses[currentColorIndexForSecond];

        selectedElement.classList.remove(...colorClasses);
        selectedElement.classList.add(newColorClass);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector("img");
    const addButton = document.getElementById("addButton");
    const increaseButton = document.getElementById("increaseButton");
    const decreaseButton = document.getElementById("decreaseButton");
    const deleteButton = document.getElementById("deleteButton");

    addButton.addEventListener("click", function () {
        const newImage = document.createElement("img");
        newImage.src = image.src;
        newImage.style.height = "400px";
        document.body.appendChild(newImage);
    });

    increaseButton.addEventListener("click", function () {
        const imageForIncrease = document.querySelector("img");
        const currentHeight = parseInt(imageForIncrease.style.height, 10) || 400;
        imageForIncrease.style.height = (currentHeight + 50) + "px";
    });

    decreaseButton.addEventListener("click", function () {
        const imageForDecrease = document.querySelector("img");
        const currentHeight = parseInt(imageForDecrease.style.height, 10) || 400;
        if (currentHeight > 50) {
            imageForDecrease.style.height = (currentHeight - 50) + "px";
        }
    });

    deleteButton.addEventListener("click", function () {
        const AllImages = document.querySelectorAll("img");
        for (let i = 0; i < AllImages.length; i++) {
            AllImages[i].remove();
        }
    });
});
