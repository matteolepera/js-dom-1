const lamp = document.getElementById("lamp-img");
console.log(lamp);
const btnLamp = document.querySelector(".btn");
console.log(btnLamp);
const imageBack = document.body;
console.log(imageBack);
const mainTitle = document.querySelector("h1");
console.log(mainTitle);

let isPowerOn = false;

btnLamp.addEventListener("click", function () {

    if (isPowerOn) {
        lamp.src = "../img/white_lamp.png";
        imageBack.style.backgroundImage = "url('../img/bg-f1-dark.webp')";
        btnLamp.classList.remove("btn-outline-dark");
        mainTitle.classList.remove("text-danger");
        btnLamp.classList.add("btn-outline-danger");
        btnLamp.innerHTML = `<i class="bi bi-lightbulb-fill"></i> ACCENDI`;
        mainTitle.innerText = "Spento come la tua anima...";
    } else {
        lamp.src = "../img/yellow_lamp.png";
        imageBack.style.backgroundImage = "url('../img/bg-f1-light2.webp')";
        btnLamp.classList.add("btn-outline-dark");
        mainTitle.classList.add("text-danger");
        btnLamp.innerHTML = `<i class="bi bi-lightbulb"></i> SPEGNI`;
        mainTitle.innerText = "FERRARIII";
    }
    isPowerOn = !isPowerOn;
})