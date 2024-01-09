let toggleBtn = document.getElementById("toggleBtn");
let toggleCircle = document.getElementById("toggleCircle");
let basicPrice = document.getElementById("basicPrice");
let proPrice = document.getElementById("proPrice");
let masterPrice = document.getElementById("masterPrice");

toggleBtn.addEventListener("click", function() {
    if(toggleCircle.classList.contains("annually")) {
        toggleCircle.classList.remove("annually");
        basicPrice.innerText = "19.99";
        proPrice.innerText = "24.99";
        masterPrice.innerText = "39.99";
    }

    else {
        toggleCircle.classList.add("annually");
        basicPrice.innerText = "199.99";
        proPrice.innerText = "249.99";
        masterPrice.innerText = "399.99";
    }
}) 