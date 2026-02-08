let mode = "single";

const singleBtn = document.getElementById("singleBtn");
const batchBtn = document.getElementById("batchBtn");
const batchSection = document.getElementById("batchSection");
const singleSummary = document.getElementById("singleSummary");
const batchSummary = document.getElementById("batchSummary");

const ingTable = document.getElementById("ingredientTable");
const addTable = document.getElementById("additionalCostTable");

singleBtn.onclick = () => setMode("single");
batchBtn.onclick = () => setMode("batch");

document.getElementById("addIngredient").onclick = addIngredient;
document.getElementById("addCost").onclick = addCost;

document.addEventListener("input", calculate);

function setMode(m){
  mode = m;
  singleBtn.classList.toggle("active", m === "single");
  batchBtn.classList.toggle("active", m === "batch");
  batchSection.classList.toggle("hidden", m === "single");
  singleSummary.classList.toggle("hidden", m !== "single");
  batchSummary.classList.toggle("hidden", m !== "batch");
  calculate();
}

function addIngredient(){
  ingTable.insertAdjacentHTML("beforeend",`
    <tr>
      <td><input></td>
      <td><input type="number"></td>
      <td>
        <select>
          <option>pcs</option>
          <option>kg</option>
        </select>
      </td>
      <td><input type="number" class="ingCost"></td>
    </tr>
  `);
}

function addCost(){
  addTable.insertAdjacentHTML("beforeend",`
    <tr>
      <td><input></td>
      <td><input></td>
      <td><input type="number" class="addCost"></td>
    </tr>
  `);
}

function calculate(){
  let ing = 0, add = 0;
  document.querySelectorAll(".ingCost").forEach(i => ing += +i.value || 0);
  document.querySelectorAll(".addCost").forEach(i => add += +i.value || 0);

  let profit = +document.getElementById("profit").value || 0;
  let total = ing + add;

  document.getElementById("sTotal").textContent = total.toFixed(2);
  document.getElementById("sSell").textContent =
    (total * (1 + profit / 100)).toFixed(2);

  let qty = +document.getElementById("batchQty").value || 1;
  let per = total / qty;

  document.getElementById("bTotal").textContent = total.toFixed(2);
  document.getElementById("bPer").textContent = per.toFixed(2);
  document.getElementById("bSell").textContent =
    (per * (1 + profit / 100)).toFixed(2);
}

addIngredient();
addCost();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicToggle");

let musicOn = false;

musicBtn.onclick = () => {
  if (!musicOn) {
    bgm.volume = 0.4;     // soft background volume
    bgm.play();
    musicBtn.textContent = "🎵 Music: ON";
  } else {
    bgm.pause();
    musicBtn.textContent = "🎵 Music: OFF";
  }
  musicOn = !musicOn;
};
musicOn = localStorage.getItem("musicOn") === "true";

if (musicOn) {
  bgm.volume = 0.4;
  bgm.play();
  musicBtn.textContent = "🎵 Music: ON";
}

musicBtn.onclick = () => {
  musicOn = !musicOn;
  localStorage.setItem("musicOn", musicOn);
  if (musicOn) {
    bgm.play();
    musicBtn.textContent = "🎵 Music: ON";
  } else {
    bgm.pause();
    musicBtn.textContent = "🎵 Music: OFF";
  }
};