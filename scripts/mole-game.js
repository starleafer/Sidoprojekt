function linkMoleGame() {
    const square = document.querySelectorAll(".square");
    const mole = document.querySelectorAll(".mole");
    const timeLeft = document.querySelector("#time-left");
    let score = document.querySelector("#score");

    

    let result = 0;
    let currentTime = timeLeft.textContent;
    let imgArray = ["../img/mole-game/boom.png", "../img/mole-game/kapow.png", "../img/mole-game/pow.png", "../img/mole-game/zap.png"];

    function randomSquare() {
        square.forEach(className => {
            className.classList.remove("mole")
            className.classList.remove("hit")
        })

        let randomPosition = square[Math.floor(Math.random()*9)]
        randomPosition.classList.add("mole")

        //assign the id of our random positon to hitposition for later use
        hitPosition = randomPosition.id
    }

    square.forEach(id => {
        id.addEventListener("mouseup", () => {
            if (id.id === hitPosition) {
                result = result +1;
                score.textContent = result;
                id.classList.add("hit")
            }
        })
    })

    function moveMole() {
        let timerId = null;
        timerId = setInterval(randomSquare, 1000)
    }

    moveMole();

    function countDown() {
        currentTime--
        timeLeft.textContent = currentTime

        if (currentTime === 0) {
            clearInterval(timerId)
            alert("GAME OVER! Your final score is " + result)
        }
    }

    let timerId = setInterval(countDown, 1000);

}