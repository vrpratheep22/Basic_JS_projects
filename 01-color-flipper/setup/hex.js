const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const textSelection = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = randomColor;
  textSelection.textContent = randomColor;
});
