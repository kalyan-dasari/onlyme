const textvalue = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const results = document.getElementById("results");
let temp;
// document.getElementById("submitbtn").onclick = convert();
function convert(){
    
    if(toF.checked){
        temp = Number(textvalue.value);
        temp = temp * 9/5 +32;
        results.textContent = temp.toFixed(1) + "F";
    }
    else if(toC.checked){
        temp = Number(textvalue.value);
        temp = (temp-32) * (5/9);
        results.textContent = temp.toFixed(1) + "C";
    }
    else{
        results.textContent = "Select a unit";
    }
}