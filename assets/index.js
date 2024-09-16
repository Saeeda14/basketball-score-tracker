let homeScore = 0
let guestScore = 0 

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let resetBtn = document.getElementById("reset-btn")


homeEl.textContent = homeScore
guestEl.textContent = guestScore 

// function that takes in points as parameter. When the onlick is invoked, it will see which button was clicked and will add the corresponding points. 
function homePoint(points) {
  homeScore += points 
  homeEl.textContent = homeScore
}


function guestPoint(points) {
  guestScore += points 
  guestEl.textContent = guestScore 
}


// reset button which when clicked will turn the home and guest screen back to 0 and will also change the current score of home and guest team back to 0. 
resetBtn.addEventListener("click", function () {
  homeEl.textContent = 0 
  guestEl.textContent = 0 
  homeScore = 0
  guestScore = 0
})
