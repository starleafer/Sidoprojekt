function importScript(url) {
    var tag = document.createElement("script");
    tag.type = "text/javascript";
    tag.src = url;
    document.body.appendChild(tag);
}

window.onload = function () {
    importScript("scripts/mole-game.js");
    importScript("scripts/word-game.js");
    importScript("scripts/fish-game.js");
}

const gameContent = document.getElementById("game-content");
const game1       = document.getElementById("game-1");
const game2       = document.getElementById("game-2");
const game3       = document.getElementById("game-3");
const game4       = document.getElementById("game-4");
const game5       = document.getElementById("game-5");
const game6       = document.getElementById("game-6");

let selectedGame = "";


game1.addEventListener("click", () => {
    selectedGame = "game1";
    moleGameHTML();
    linkMoleGame();
});

// WORD GAME

game2.addEventListener("click", () => {
    selectedGame = "game2";
    wordGameHTML();
    linkWordGame();
});

game3.addEventListener("click", () => {
    selectedGame = "game3";
    fishGameHTML();
    linkFishGame();
    
});
game4.addEventListener("click", () => {
    gameContent.innerHTML = `<h1>LET THE GAME4 BEGIN!</h1>`

});
game5.addEventListener("click", () => {
    gameContent.innerHTML = `<h1>LET THE GAME5 BEGIN!</h1>`

});
game6.addEventListener("click", () => {
    gameContent.innerHTML = `<h1>LET THE GAME6 BEGIN!</h1>`

});


// POP-UP

function gameEndPopUp(outcome, result) {

    const popUpDiv = document.createElement('div');
    popUpDiv.classList.add('game-outcome-square');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    
    document.querySelector('main').append(popUpDiv, overlay);
    
    switch (outcome) {
        case "win": 
            popUpDiv.innerHTML = `
            <p class="result-text">Grattis! Du vann!</p>`
            break;
        case "loose": 
            popUpDiv.innerHTML = `
            <p class="result-text">Grattis! Du är sämst!</p>`
            break;
        case "times-up": 
            popUpDiv.innerHTML = `
            <p>Tiden är slut</p>
            <p>Du fick ${result} poäng`
            break;
    }
    popUpDiv.innerHTML += `
    <div id="btn-div">
        <button id="again-btn">Spela igen</button>
        <button id="back-btn">Tillbaka till spelsidan</button>
    </div>`

    document.getElementById("again-btn").addEventListener("click", () => {
        switch (selectedGame) {
            case "game1":
                moleGameHTML();
                linkMoleGame();
                break;
            case "game2":
                wordGameHTML();
                linkWordGame();
                break;
            case "game3":
                fishGameHTML();
                linkFishGame();
                break;
        }
    })

    document.getElementById("back-btn").addEventListener("click", () => {
        location.reload();
    })

}
function wordGameHTML() {

    gameContent.innerHTML = `
    <div id="cake-wrapper">
    <div class="game-img-div"><img src="img/word-game/cake-monster.png"></div>
    <div class="game-img-div"><img src="img/word-game/cake1.png"></img></div>
    <div class="game-img-div"><img src="img/word-game/cake2.png"></div>
    <div class="game-img-div"><img src="img/word-game/cake3.png"></div>
    <div class="game-img-div"><img src="img/word-game/cake4.png"></div>
    <div class="game-img-div"><img src="img/word-game/cake5.png"></div>
    <div class="game-img-div"><img src="img/word-game/cake6.png"></div>
        <div class="game-img-div"><img src="img/word-game/cake7.png"></div>
        <div class="game-img-div"><img src="img/word-game/cake8.png"></div>
        <div class="game-img-div"><img src="img/word-game/cake9.png"></div>
        <div class="game-img-div"><img src="img/word-game/cake10.png"></div>
        </div>
        <div id="game-word"></div>
        
        <div id="alphabet-container"></div>
        <p id="end-message"></p>
        `
    }

function moleGameHTML() {
    gameContent.innerHTML = `
    <h1 id="mole-headline">Whack a mole</h1>
    <div id="mole-game-wrapper">
        <div id="score-time-container">
            <button id = "start-button">Start</button>
            <h2>Din poäng</h2>
            <h2 id="score">0</h2>

            <h2>Sekunder kvar:</h2>
            <h2 id="time-left">60</h2>
        </div>
        <div id="mole-grid">
            <div class="square" id="1"></div>
            <div class="square" id="2"></div>
            <div class="square" id="3"></div>
            <div class="square" id="4"></div>
            <div class="square" id="5"></div>
            <div class="square" id="6"></div>
            <div class="square" id="7"></div>
            <div class="square" id="8"></div>
            <div class="square" id="9"></div>
        </div>
    </div>
    `
}

function fishGameHTML() {
    gameContent.innerHTML = `<div id="fish-background">
    <button id="start-btn-fish">Start</button>
    <p id="score-fish-game">Score: </p>
    <img id="fish-img" src="img/fish-img.png" alt="Liten röd fisk">
    </div>`
}