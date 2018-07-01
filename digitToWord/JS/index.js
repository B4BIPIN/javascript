window.onload = function (){
    document.querySelector('#btnConvert').addEventListener("click",takeInput,true);   
}
function takeInput(){
    var II = document.querySelector('#myInput').value;
    ConvertII(II);
}
var ones = ["zero","one","two","three","four","five","six","seven","eight","nine"];
var ten = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","ninteen"];
var tens = ["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty"];
function ConvertII(input){
    var num = "";
    var digitArray = [];
    num = parseInt(input);
    document.querySelector('.output').innerHTML =    giveAlfabet(num);  
}
function giveAlfabet(num){
    let digitArr = [];
    let more;
    if(num < 10){
        return ones[num];
    }
    else if(num >=10 && num < 20){
        return ten[num-10];
    }
    else if(num >= 20 && num < 1000){
           let strLength = num.toString().length;
           num = parseInt(num);
           while(strLength > 0){
               let rem = num%10;
               digitArr.push(parseInt(rem));
               num = num/10;
               strLength--;
           }
           digitArr.reverse();
       return  giveAllAlphabet(digitArr);
    }
    else if(num == 1000){
        return "one thousand";
    }
    else {
        window.prompt("number should be in between 0 to 1000");
    }

}
function giveAllAlphabet(digitArray){
    if(digitArray.length == 2 && digitArray[0]>1){
        if(digitArray[1]==0){
            return tens[digitArray[0]]
        }
        else return tens[digitArray[0]]+" "+ones[digitArray[1]];
    }   
    else if(digitArray.length == 3){ //333
     if(digitArray[1]==0){ //20...
        if(digitArray[2]==0){ //200
            return ones[digitArray[0]]+" "+"hundred only";
        }
        else if(digitArray[2] != 0){//202
            return ones[digitArray[0]]+" "+"hundred"+" "+ones[digitArray[2]]+" "+"only";
        }
     }
     else if(digitArray[1]==1){
        return ones[digitArray[0]]+" "+" hundred "+ten[digitArray[2]]+" only ";   
    }   
    else {
        return ones[digitArray[0]]+" "+"hundred"+" "+tens[digitArray[1]]+" "+ones[digitArray[2]]+" "+"only";
    }
    }
}