function hideElementById(hideId){

    const getHideId = document.getElementById(hideId);
    getHideId.classList.add('hidden');
}

function showElementById(showId){

    const getShowId = document.getElementById(showId);
    getShowId.classList.remove('hidden');
}

function getARandomAlphabet(){

    //create a alphabet array
    const AlphString = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArray = AlphString.split('');

    //get a random index number 0-25
    const randomIndex = Math.round(Math.random()*25);
    const aRandomAlpha = alphaArray[randomIndex];

    return aRandomAlpha;
}

function setBackgroundColor(alphaBetId){

    const element = document.getElementById(alphaBetId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(alphaBetId){

    const element = document.getElementById(alphaBetId);
    element.classList.remove('bg-orange-400');
}

function getScore(scoreId){

    //Get the current Score=======
    const currentScoreElement = document.getElementById(scoreId);
    const currentScoreText = currentScoreElement.innerText;
    const currentScoreNum = parseInt(currentScoreText);

    return currentScoreNum;
}

function setScoreInPlace(scoreId, value){

    document.getElementById(scoreId).innerText = value;
   
}

function gameOver(){

    hideElementById('Play');
    showElementById('ScoreSection');
}