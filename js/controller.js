var buttonArray ;
var warn;
window.addEventListener("load",()=>
{   buttonArray = document.getElementsByTagName("button");  //stores the buttons as an HTML Collection
    /*Bind function to each button using for loop
    for(let i = 0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener("click",isZeroOrX);
    }*/
    document.querySelector("#gameover").innerHTML = "0 TURN";
    Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",isZeroOrX));
    document.querySelector("#playagain").addEventListener("click",playagain);
    //Use for Each of array to HTML Collection.Calling function using ABC of function
});
var isXorZeroFlag = false;
function isZeroOrX(){
    var buttonText = this.innerHTML; //stores the innerHTML of button
    if(!buttonText){    //check if the button is empty
    document.querySelector("#gameover").innerHTML =isXorZeroFlag?"0 TURN":"X TURN";
    this.innerHTML = isXorZeroFlag?"X":"0"; //assigns the value to button
    isXorZeroFlag = !isXorZeroFlag; 
    if(isGameOver()){
        document.querySelector("#gameover").innerHTML = isXorZeroFlag?"0 WINS":"X WINS";
        document.querySelector("#show").style.top= "40%";
        warn =this.innerHTML;
        Array.prototype.forEach.call(buttonArray,(button)=>button.removeEventListener("click",isZeroOrX));
        Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",warning));
    }
    //document.querySelector("#gameover").innerHTML =isGameOver()?"Game Over":"";
    }
}

function warning(){
    window.alert(warn+" has already won the game");
}

function playagain(){
    Array.prototype.forEach.call(buttonArray,(button)=>button.removeEventListener("click",warning));
    Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",isZeroOrX));
    Array.prototype.forEach.call(buttonArray,(button)=>button.innerHTML="");
    document.querySelector("#gameover").innerHTML =!isXorZeroFlag?"0 TURN":"X TURN";
    document.querySelector("#show").style.top= "-40%";
}

function isGameOver(){
    if(tictac.isSame(buttonArray[0].innerHTML,buttonArray[1].innerHTML,buttonArray[2].innerHTML)){
        return true;
    }
    if(tictac.isSame(buttonArray[3].innerHTML,buttonArray[4].innerHTML,buttonArray[5].innerHTML)){
        return true;
    }
    if(tictac.isSame(buttonArray[6].innerHTML,buttonArray[7].innerHTML,buttonArray[8].innerHTML)){
        return true;
    }
    if(tictac.isSame(buttonArray[0].innerHTML,buttonArray[3].innerHTML,buttonArray[6].innerHTML)){
        return true;
    }
    if(tictac.isSame(buttonArray[1].innerHTML,buttonArray[4].innerHTML,buttonArray[7].innerHTML)){
        return true;
    }
    if(tictac.isSame(buttonArray[2].innerHTML,buttonArray[5].innerHTML,buttonArray[8].innerHTML)){
        return true;
    }
    if(tictac.isSame(buttonArray[0].innerHTML,buttonArray[4].innerHTML,buttonArray[8].innerHTML)){
        return true;
    }
    if(tictac.isSame(buttonArray[2].innerHTML,buttonArray[4].innerHTML,buttonArray[6].innerHTML)){
        return true;
    }
    if(tictac.isTie(buttonArray[0].innerHTML,buttonArray[1].innerHTML,buttonArray[2].innerHTML,buttonArray[3]
        .innerHTML,buttonArray[4].innerHTML,buttonArray[5].innerHTML,buttonArray[6].innerHTML,buttonArray[7]
        .innerHTML,buttonArray[8].innerHTML)){
        document.querySelector("#gameover").innerHTML ="GAME DRAW";
        document.querySelector("#show").style.top= "40%";
    }
    return false;
}


//trim function is used to remove preceding and trailing spaces and not in between spaces