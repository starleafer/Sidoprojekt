function linkBoardGame() {
    let playerPosition = 0;
    let chancePositions = [5, 7, 9, 11, 14, 17, 18];
    let chanceEvent =["Hoppa fram två steg", "Stå över ett slag", "Gå ett steg fram"];
    let chanceBtn = document.getElementById("chance-cards");

    document.getElementById("dice").addEventListener("click", (e) => {
        e.target.classList.add("big-text");
        let diceThrow = Math.floor(Math.random() * 2) + 1;
        e.target.innerText = diceThrow;
        color(diceThrow);
        checkForChance(playerPosition);
    })

    chanceBtn.addEventListener("click", () => {
        let chance = Math.floor(Math.random() * 3);
        chanceBtn.innerText = chanceEvent[chance];

        switch (chance) {
            case 0: 
                color(2);
                break;
            case 1: 
                alert("hej");
                break;
            case 2: 
                color(1);
                break;
        }

        setTimeout(setDisabled, 1000);
    })

    function color(steps) {
        for (i = 0; i < steps; i++) {
            playerPosition++;
            document.getElementById(`${playerPosition}`).classList.add("color");
            }
    }

    function setDisabled() {
        chanceBtn.setAttribute("disabled", "");
        chanceBtn.innerText = "Chance Card";
    }

    function checkForChance(position) {
        if (chancePositions.includes(position)) {
            chanceBtn.removeAttribute("disabled", "");
            chanceBtn.innerText = "Open Chance Card?";
                }
            }

}