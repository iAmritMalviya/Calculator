console.log('index.js');
let result = document.getElementById('newResult');
let inputBox = document.getElementById('inputBox');

 function input(val) {
    console.log(val);
    inputBox.value += val
    return val;
}
function solve() {
 
   if (inputBox.value == (1+'+')) {
       result.style.backgroundColor = 'red';
       result.style.color = 'white';
       result.innerHTML = 'NEVER SETTLE'
       
   }
   else
   {
       let x = document.getElementById('inputBox').value;
       result.innerHTML = eval(x);
   }

}

function clearr() {
    result.style.backgroundColor = '#3A4655';
    result.style.color = '#727B86';
    result.textContent = "" 
    inputBox.value = "";
}
function copy() {
    navigator.clipboard.writeText(result.innerHTML)
}
// function blinker() {
//     $('.blink-me').fadeOut(200);
//     $('.blink-me').fadeIn(200);
// }
// setInterval(blinker, 500);