document.addEventListener("DOMContentLoaded", () => {

  let mode = "single";

  const singleBtn = document.getElementById("singleBtn");
  const batchBtn = document.getElementById("batchBtn");
  const batchSection = document.getElementById("batchSection");
  const singleSummary = document.getElementById("singleSummary");
  const batchSummary = document.getElementById("batchSummary");

  const ingTable = document.getElementById("ingredientTable");
  const addTable = document.getElementById("additionalCostTable");

  const bgm = document.getElementById("bgm");
  const musicBtn = document.getElementById("musicBtn");

  // MODE TOGGLE
  singleBtn.onclick = () => setMode("single");
  batchBtn.onclick = () => setMode("batch");

  function setMode(m){
    mode=m;
    singleBtn.classList.toggle("active", m==="single");
    batchBtn.classList.toggle("active", m==="batch");
    batchSection.classList.toggle("hidden", m==="single");
    singleSummary.classList.toggle("hidden", m!=="single");
    batchSummary.classList.toggle("hidden", m!=="batch");
    calculate();
  }

  // INGREDIENTS & COSTS
  function addIngredient(){
    ingTable.insertAdjacentHTML("beforeend", `
      <tr>
        <td><input></td>
        <td><input type="number"></td>
        <td>
          <select>
            <option>pcs</option>
            <option>pack</option>
            <option>sachet</option>
            <option>kg</option>
            <option>g</option>
            <option>liter</option>
            <option>ml</option>
            <option>cup</option>
            <option>tbsp</option>
            <option>tsp</option>
          </select>
        </td>
        <td><input type="number" class="ingCost"></td>
        <td><button class="removeRow">❌</button></td>
      </tr>
    `);
    ingTable.querySelectorAll(".removeRow").forEach(btn => {
      btn.onclick = e => { e.target.closest("tr").remove(); calculate(); };
    });
  }

  function addCost(){
    addTable.insertAdjacentHTML("beforeend", `
      <tr>
        <td><input></td>
        <td><input></td>
        <td><input type="number" class="addCost"></td>
        <td><button class="removeRow">❌</button></td>
      </tr>
    `);
    addTable.querySelectorAll(".removeRow").forEach(btn => {
      btn.onclick = e => { e.target.closest("tr").remove(); calculate(); };
    });
  }

  document.getElementById("addIngredient").onclick = addIngredient;
  document.getElementById("addCost").onclick = addCost;

  document.addEventListener("input", calculate);

  // CALCULATIONS
  function calculate(){
    let ing=0, add=0;
    document.querySelectorAll(".ingCost").forEach(i => ing += +i.value || 0);
    document.querySelectorAll(".addCost").forEach(i => add += +i.value || 0);
    const profit = +document.getElementById("profit").value || 0;
    const total = ing + add;

    document.getElementById("ingTotal").textContent = ing.toFixed(2);
    document.getElementById("addTotal").textContent = add.toFixed(2);

    document.getElementById("sTotal").textContent = total.toFixed(2);
    document.getElementById("sSell").textContent = (total*(1+profit/100)).toFixed(2);

    const qty = +document.getElementById("batchQty").value || 1;
    const per = qty ? total/qty : 0;

    document.getElementById("bTotal").textContent = total.toFixed(2);
    document.getElementById("bPer").textContent = per.toFixed(2);
    document.getElementById("bSell").textContent = (per*(1+profit/100)).toFixed(2);
  }

  // INITIAL ROWS
  addIngredient();
  addCost();

  // MUSIC TOGGLE
  let musicOn = localStorage.getItem("musicOn")==="true";
  function updateMusicUI(){
    if(musicOn){
      bgm.volume=0.4;
      bgm.play().catch(()=>{}); // prevent autoplay error
      musicBtn.textContent="🎵 Music: ON";
    } else {
      bgm.pause();
      musicBtn.textContent="🎵 Music: OFF";
    }
  }
  musicBtn.onclick=()=>{
    musicOn=!musicOn;
    localStorage.setItem("musicOn", musicOn);
    updateMusicUI();
  };
  updateMusicUI();

  // SERVICE WORKER
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js");
  }

});