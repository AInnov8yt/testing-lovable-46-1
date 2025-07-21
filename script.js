const display = document.getElementById("display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let count = 0;

incrementButton.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

decrementButton.addEventListener("click", () => {
  count--;
  display.textContent = count;
});