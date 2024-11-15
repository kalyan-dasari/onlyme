const decreasebtn = document.getElementById("decBtn");
const resetbtn = document.getElementById("resetBtn");
const increasebtn = document.getElementById("incBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreasebtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetbtn.onclick = function() {
    count = 0;
    countLabel.textContent = count; 
}

increasebtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}