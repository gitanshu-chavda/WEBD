let randomNumber = Math.floor(Math.random()*100)+1;

let attempts = 0;
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const guessInput = document.getElementById("guess");

submitBtn.addEventListener("click",checkGuess);

guessInput.addEventListener("keypress", function(event){
    if(event.key=="Enter"){
        submitBtn.click();
    }
});


function checkGuess(){
    let guessValue = Number(guessInput.value);
    if(guessValue<1 || guessValue>100 || isNaN(guessValue)){
        result.textContent = "Enter a number between 1 and 100";
        return;
    }

    attempts++;

    if(guessValue==randomNumber){
        result.innerHTML=`Correct! You have guessed the number in ${attempts} attempts!`;
        submitBtn.disabled = true;
    }
    else if(guessValue<randomNumber){
        result.innerHTML = "Oops! The number you've entered is too low, Try Again!";
    }
    else{
        result.innerHTML = "Oops! The number you've entered is too high, Try Again!";
    }
    guessInput.value="";
    guessInput.focus();
}

