"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let count = 0;
const countText = document.getElementById("count");
const resetBtn = document.getElementById("reset");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const maxAlert = document.getElementById("max-alert");
const minAlert = document.getElementById("min-alert");
function updateUI() {
    countText.textContent = count.toString();
}
const maxLimit = 10;
const minLimit = -10;
function hideAlerts() {
    maxAlert.classList.add("hidden");
    minAlert.classList.add("hidden");
}
function showAlert(alertEl) {
    hideAlerts();
    alertEl.classList.remove("hidden");
    setTimeout(() => {
        alertEl.classList.add("hidden");
    }, 4000);
}
function setCount(value) {
    hideAlerts();
    if (value > maxLimit) {
        maxAlert.classList.remove("hidden");
        showAlert(maxAlert);
        count = 0;
    }
    else if (value < minLimit) {
        minAlert.classList.remove("hidden");
        showAlert(minAlert);
        count = 0;
    }
    else {
        count = value;
    }
    updateUI();
}
plusBtn.addEventListener("click", () => {
    setCount(count + 1);
});
minusBtn.addEventListener("click", () => {
    setCount(count - 1);
});
resetBtn.addEventListener("click", () => {
    setCount(0);
});
//# sourceMappingURL=main.js.map