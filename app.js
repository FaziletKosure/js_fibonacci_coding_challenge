window.onload = function() {
    document.getElementById("myNumber").focus();
  }
//Slider
let amountImg=13;
let widthImg=1400;
let deltaX=0;
const sliderContainer=document.querySelector("#slider-container");
window.setInterval(doSlider,3000);

function doSlider() {
    deltaX += widthImg;
	deltaX %= amountImg*widthImg;
    // console.log(deltaX);  
    sliderContainer.querySelector(".slide").style.marginLeft = '-' + deltaX + 'px'; 
    
}
// FIBONACCI NUMBER
const myNumber=document.getElementById("myNumber");
const checkbtn=document.getElementById("checkbtn");
myNumber.addEventListener("keyup", function(evt) {          // Keyup -> Any key pressed
    if (evt.keyCode == 13) {  
        evt.preventDefault();                        // 13 for enter
        checkbtn.click();
    }
  });


  function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function myFunction() {
    var n = myNumber.value;
    const fib=fibonacciGenerator (n);
    const suffix=ordinal_suffix_of(n);
    if (n<0){
        document.getElementById("demo").innerHTML='Please enter only positive integers!';
    }else{
        document.getElementById("demo").innerHTML = suffix+" element of the fibonacci sequence is "+fib;
    }
    myNumber.value="";
    // myNumber.focus();
}
 
function fibonacciGenerator (num) {
    let num1=0; 
    let num2=1; 
    let sum; 
 
    if (num==0) return 0;
    for (i = 2; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
}
