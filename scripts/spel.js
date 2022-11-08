function importScript(url) {
    var tag = document.createElement("script");
    tag.type = "text/javascript";
    tag.src = url;
    document.body.appendChild(tag);
}

window.onload = function () {
    importScript("scripts/mole-game.js");
    importScript("scripts/word-game.js");
}

const gameContent = document.getElementById("game-content");
const game1       = document.getElementById("game-1");
const game2       = document.getElementById("game-2");
const game3       = document.getElementById("game-3");
const game4       = document.getElementById("game-4");
const game5       = document.getElementById("game-5");
const game6       = document.getElementById("game-6");


game1.addEventListener("click", () => {
    gameContent.innerHTML = `
    <h1>Whack a mole</h1>

    <h2>Your score:</h2>
    <h2 id="score">0</h2>

    <h2>Seconds left:</h2>
    <h2 id="time-left">60</h2>

    <div class="grid">
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
    `
    linkMoleGame();
});
game2.addEventListener("click", () => {
    gameContent.innerHTML = `
    <div id="game-img">Bild</div>
    <div id="game-word"></div>

    <div id="alphabet-container"></div>
    `
    linkWordGame();

});
game3.addEventListener("click", () => {
    gameContent.innerHTML = `<h1>LET THE GAME3 BEGIN!</h1>`
    
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
