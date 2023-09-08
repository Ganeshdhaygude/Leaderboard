const scoreMainContainer = document.getElementById("scoreMainContainer");
const AddDetailsButton = document.getElementById("AddDetailsButton");
console.log(AddDetailsButton);
AddDetailsButton.addEventListener("click", () => {
  const fName = document.getElementById("fName");
  const lName = document.getElementById("lName");
  const country = document.getElementById("country");
  const score = document.getElementById("score");

  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreBoard");

  scoreBoard.innerHTML = `
    <p class="playerName">${fName.value} ${lName.value}</p>
    <p class="country">${country.value}</p>
    <p class="score">${score.value}</p>
    <p class="deleteIcon">&#x1f5d1;</p>
  `;

  scoreMainContainer.appendChild(scoreBoard);
  fName.value = "";
  lName.value = "";
  country.value = "";
  score.value = "";
  //sortBoard();
  //deleteElemnt();
});