let matrice = localStorage.getItem("matrice")
  ? localStorage.getItem("matrice").split(";")
  : ["nome,cognome,indirizzo,citta"];

function bomboclat() {
  let nome = document.querySelector("#nome").value;
  let cognome = document.querySelector("#Cognome").value;
  let citta = document.querySelector("#Citta").value;
  let indirizzo = document.querySelector("#Indirizzo").value;

  let nuovaRiga = `${nome},${cognome},${indirizzo},${citta}`;
  matrice.push(nuovaRiga);
  aggiornaTabella();
  document.querySelector("#nome").value = "";
  document.querySelector("#Cognome").value = "";
  document.querySelector("#Citta").value = "";
  document.querySelector("#Indirizzo").value = "";
  localStorage.setItem("matrice", matrice.join(";"));
}
function aggiornaTabella() {
  let tabella = document.querySelector("#tabella");
  tabella.innerHTML = "";
  for (let i = 0; i < matrice.length; i++) {
    let BOMBOCLATTE = document.createElement("tr");
    let righe = matrice[i].split(",");
    for (let j = 0; j < righe.length; j++) {
      let bomboclat = document.createElement("td");
      bomboclat.textContent = righe[j];
      BOMBOCLATTE.appendChild(bomboclat);
    }
    tabella.appendChild(BOMBOCLATTE);
  }
}
function pagina() {
  location.href = "pagina.html";
}
function pag2() {
  location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", aggiornaTabella);
