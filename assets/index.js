let count = 0

let homeEl = document.getElementById("home-el")

homeEl.textContent = count

function onePoint() {
  count += 1
  homeEl.textContent = count 
}

function twoPoint() {
  count += 2
  homeEl.textContent = count 
}

function threePoint() {
  count += 3
  homeEl.textContent = count 
}

