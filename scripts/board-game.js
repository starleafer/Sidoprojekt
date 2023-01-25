function linkBoardGame() {

    let playerPosition = 0;
    let enemyPosition = 0;
    let counter = 0;
    let chancePositions = [5, 7, 9, 11, 14, 17, 18];
    let chanceEvent =["Hoppa fram två steg", "Stå över ett slag", "Gå ett steg fram"];
    let chanceBtn = document.getElementById("chance-cards");

    document.getElementById("dice").addEventListener("click", (e) => {
        counter++;
        e.target.classList.add("big-text");
        let diceThrow = Math.floor(Math.random() * 2) + 1;
        e.target.innerText = diceThrow;
        color(diceThrow);
        checkForChance(playerPosition);
        enemyMove();
    })

    chanceBtn.addEventListener("click", () => {
        let chance = Math.floor(Math.random() * 3);
        chanceBtn.innerText = chanceEvent[chance];

        switch (chance) {
            case 0: 
                color(2);
                break;
            case 1:
                break;
            case 2: 
                color(1);
                break;
        }

        setTimeout(setDisabled, 1000);
    })

    function enemyMove() {
        if (counter > 2) {
            let enemySteps = Math.floor(Math.random() * 3) + 1;
            enemyPosition = enemyPosition + enemySteps;
            document.getElementById(`${enemyPosition}`).classList.add("enemy");
            if (enemyPosition >= playerPosition) {
                alert("Du förlorade!")
            }
        }
    }

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