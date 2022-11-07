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
    linkGame();
});
game2.addEventListener("click", () => {
    gameContent.innerHTML = `
    <div id="game-img">Bild</div>
    <div id="game-word">Ord</div>

    <div>
        <button id="btn-a">a</button>
        <button id="btn-b">b</button>
        <button id="btn-c">c</button>
        <button id="btn-d">d</button>
        <button id="btn-e">e</button>
        <button id="btn-f">f</button>
        <button id="btn-g">g</button>
        <button id="btn-h">h</button>
        <button id="btn-i">i</button>
        <button id="btn-j">j</button>
        <button id="btn-k">k</button>
        <button id="btn-l">l</button>
        <button id="btn-m">m</button>
        <button id="btn-n">n</button>
        <button id="btn-o">o</button>
        <button id="btn-p">p</button>
        <button id="btn-q">q</button>
        <button id="btn-r">r</button>
        <button id="btn-s">s</button>
        <button id="btn-t">t</button>
        <button id="btn-u">u</button>
        <button id="btn-v">v</button>
        <button id="btn-w">w</button>
        <button id="btn-x">x</button>
        <button id="btn-y">y</button>
        <button id="btn-z">z</button>
        <button id="btn-oa">å</button>
        <button id="btn-aa">ä</button>
        <button id="btn-oo">ö</button>
    </div>
    `
    
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
