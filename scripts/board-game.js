function linkBoardGame() {
    let playerPosition = 0;
    let chancePositions = [5, 7]

    document.getElementById("dice").addEventListener("click", (e) => {
        e.target.classList.add("big-text");
        let diceThrow = Math.floor(Math.random() * 3) + 1;
        e.target.innerText = diceThrow;
        color(diceThrow);
        checkForChance(playerPosition);
    })

    function color(dice) {
        for (i = 0; i < dice; i++) {
            playerPosition++;
            document.getElementById(`${playerPosition}`).classList.add("color");
            }
    }

    function checkForChance(position) {
        if (chancePositions.includes(position)) {
            let chanceBtn = document.getElementById("chance-cards");
            chanceBtn.removeAttribute("disabled", "");
        }
    }
}