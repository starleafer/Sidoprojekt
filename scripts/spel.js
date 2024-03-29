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
    importScript("scripts/mine-game.js");
    importScript("scripts/board-game.js");
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
    selectedGame = "game4";
    mineGameHTML();
    linkMineGame();

});
game5.addEventListener("click", () => {
    gameContent.innerHTML = `<h1>LET THE GAME5 BEGIN!</h1>`

});
game6.addEventListener("click", () => {
    selectedGame = "game6";
    boardGameHTML();
    linkBoardGame();

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
        console.log(selectedGame);
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
            case "game4":
                mineGameHTML();
                linkMineGame();
                break;
            case "game6":
                boardGameHTML();
                linkBoardGame();
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
    gameContent.innerHTML = `
    <div id="fish-background">
    <canvas id="fish-canvas"></canvas>
    <button id="start-btn-fish">Start</button>
    <p id="score-fish-game">Score: </p>
    <img id="fish-img" src="img/fish-game/fish-small.png" alt="Liten röd fisk">
    </div>`
}


function mineGameHTML() {
    gameContent.innerHTML = `
        <div id="mine-game-content">
            <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
            <div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
            <div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
            <div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
            <div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
        </div>`
}

function boardGameHTML() {
    gameContent.innerHTML = `
    <div id="board-wrapper">
        <div id="dice" class="small-text">Throw the dice</div>
        <div id="main-board">
            <div class="board-grid"></div>
            <div class="board-grid"></div>
            <div class="board-grid"><div id="4" class="player-path"></div></div>
            <div class="board-grid"><div id="5" class="chance" class="player-path">?</div></div>
            <div class="board-grid"><div id="6" class="player-path"></div></div>
            <div class="board-grid"><div id="7" class="chance" class="player-path">?</div></div>

            <div class="board-grid"><div id="1" class="player-path"></div></div>
            <div class="board-grid"><div id="2" class="player-path"></div></div>
            <div class="board-grid"><div id="3" class="player-path"></div></div>
            <div class="board-grid"></div>
            <div class="board-grid"></div>
            <div class="board-grid"><div id="8" class="player-path"></div></div>

            <div class="board-grid"></div>
            <div class="board-grid"></div>
            <div class="board-grid"></div>
            <div class="board-grid"></div>
            <div class="board-grid"><div id="10" class="player-path"></div></div>
            <div class="board-grid"><div id="9" class="chance" class="player-path">?</div></div>

            <div class="board-grid"></div>
            <div class="board-grid"><div id="14" class="chance" class="player-path">?</div></div>
            <div class="board-grid"><div id="13" class="player-path"></div></div>
            <div class="board-grid"><div id="12" class="player-path"></div></div>
            <div class="board-grid"><div id="11" class="chance" class="player-path">?</div></div>
            <div class="board-grid"></div>

            <div class="board-grid"></div>
            <div class="board-grid"><div id="15" class="player-path"></div></div>
            <div class="board-grid"></div>
            <div class="board-grid"></div>
            <div class="board-grid"></div>
            <div class="board-grid"></div>

            <div class="board-grid"></div>
            <div class="board-grid"><div id="16" class="player-path"></div></div>
            <div class="board-grid"><div id="17" class="chance" class="player-path">?</div></div>
            <div class="board-grid"><div id="18" class="chance" class="player-path">?</div></div>
            <div class="board-grid"><div id="19" class="player-path"></div></div>
            <div class="board-grid"><div id="20" class="player-path"></div></div>
        </div>
        <button id="chance-cards" disabled>Chance Card</button>
    </div>
    `
}