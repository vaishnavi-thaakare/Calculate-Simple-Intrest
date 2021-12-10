var principle=document.querySelector("#principle-Amount");
var numberOfYears=document.querySelector("#number-of-years");
var rateOfIntrest=document.querySelector("#rate-of-intrest");
var browseBtn=document.querySelector("#btn");
var outputDiv=document.querySelector("#output");





browseBtn.addEventListener("click",calculateSimpleIntrest);
function calculateSimpleIntrest(){
    var p=(Number(principle.value));
    var q=Number(numberOfYears.value)
var r=Number(rateOfIntrest.value);
     if (p>0 && q>0 && r>0){
         var simpleIntrest=(p*q*r)/100;
         outputDiv.innerText=`simple Intrest is ${simpleIntrest}`
     }else{
         outputDiv.innerText=" Please Enter Valid Input"
     }
 
    

    
}