
function handleKeyboardPressedKey(event){

    const playerPressed = event.key;
    //expected alphabet
    const displayAlphabet = document.getElementById('wordDisplayId').innerText;

    lowerCaseOfdisplayAlphabet = displayAlphabet.toLowerCase();

    if(playerPressed === 'Escape'){
        gameOver();
    }

    if(playerPressed === lowerCaseOfdisplayAlphabet){

        //Get the current Score=======
        const currentScoreNum = getScore('Score');
        //Increment the Score by 1
        const newScore = currentScoreNum + 1;
        //Display the Score 
        setScoreInPlace('Score', newScore);

        removeBackgroundColor(playerPressed);
        continuePlay();


    }else{

        //Get the current Life score=======
        const currentLifeNum = getScore('Life');
        //Decrement the Score by 1
        const newLife = currentLifeNum - 1;
        //Display the Score 
        setScoreInPlace('Life', newLife);

        if(newLife == 0){
            gameOver();
            const totalScore = getScore('Score');
            setScoreInPlace('totalScore', totalScore);

            const alphabetBody = document.getElementById('wordDisplayId');
            const alphabet = alphabetBody.innerText;
            removeBackgroundColor(alphabet.toLowerCase());

        }



    }


}

document.addEventListener('keyup', handleKeyboardPressedKey);


function continuePlay(){

    const playAlphabetId = document.getElementById('wordDisplayId');
    const alphabet = getARandomAlphabet();
    //set A randomly Generated Alphabet in display
    playAlphabetId.innerText = alphabet.toUpperCase();
    setBackgroundColor(alphabet);

}


function play(){

    hideElementById('Home');
    hideElementById('ScoreSection');
    showElementById('Play');

    //Reset life and score
    setScoreInPlace('Life', 5);
    setScoreInPlace('Score', 0);

    continuePlay();
}