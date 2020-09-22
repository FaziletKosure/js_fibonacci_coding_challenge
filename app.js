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


let findFibNum=document.getElementById("findFibNum");
let result=document.getElementById("result");
console.log(result);
findFibNum.addEventListener("click",fibonacci,false);

function fibonacci(num) {
    let fibNum=document.getElementById("fibNum").value;
    console.log(fibNum);
    var num1=0;
    var num2=1;
    var sum;
    var i = 0;
    for (let i = 0; i < num; i++) {
        sum=num1+num2;
        num1=num2;
        num2=sum;
      
    }
    return num2;
   
  
    

}

alert(fibonacci(5))
console.log(fibonacci(fibNum));
// result.innerHTML=fibonacci(fibNum)


