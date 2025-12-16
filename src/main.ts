let count: number = 0

const countText = document.getElementById("count") as HTMLParagraphElement
const resetBtn = document.getElementById("reset") as HTMLButtonElement
const plusBtn = document.getElementById("plus") as HTMLButtonElement
const minusBtn = document.getElementById("minus") as HTMLButtonElement
const maxAlert = document.getElementById("max-alert") as HTMLDivElement
const minAlert = document.getElementById("min-alert") as HTMLDivElement

function updateUI(): void {
  countText.textContent = count.toString()
}

const maxLimit = 10
const minLimit = -10

function hideAlerts(): void {
  maxAlert.classList.add("hidden")
  minAlert.classList.add("hidden")
}

function showAlert(alertEl: HTMLDivElement): void {
  hideAlerts()
  alertEl.classList.remove("hidden")

  setTimeout(() => {
    alertEl.classList.add("hidden")
  }, 4000)
}

function setCount(value: number): void {
  hideAlerts();

  if (value > maxLimit) {
    maxAlert.classList.remove("hidden")
    showAlert(maxAlert)
    count = 0
  } else if (value < minLimit) {
    minAlert.classList.remove("hidden")
    showAlert(minAlert)
    count = 0
  } else {
    count = value
  }
  updateUI()
}

plusBtn.addEventListener("click", () => {
  setCount(count + 1)
})

minusBtn.addEventListener("click", () => {
  setCount(count - 1)
})

resetBtn.addEventListener("click", () => {
  setCount(0)
})
