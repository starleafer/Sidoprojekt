function linkBoardGame() {
    document.getElementById("dice").addEventListener("click", (e) => {
        e.target.classList.add("big-text");
        let diceThrow = Math.floor(Math.random() * 6) + 1;
        e.target.innerText = diceThrow;
    })
}