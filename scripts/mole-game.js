function linkMoleGame() {


    const square = document.querySelectorAll(".square");
    const mole = document.querySelectorAll(".mole");
    const timeLeft = document.querySelector("#time-left");
    let score = document.querySelector("#score");
    
    let startButton = document.querySelector("#start-button");

    

    startButton.addEventListener("click", function() {
    
    
    let result = 0;
    let currentTime = timeLeft.textContent;
    let classArray = ["zap", "boom", "pow", "kapow"];
    let randomImg = "";

    

    function randomClassChoser(array) {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }

    function randomSquare() {
        square.forEach(className => {
            className.classList.remove("mole");
            className.classList.remove("pow");
            className.classList.remove("zap");
            className.classList.remove("boom");
            className.classList.remove("kapow");
        })

        let randomPosition = square[Math.floor(Math.random()*9)]
        randomPosition.classList.add("mole");

        //assign the id of our random positon to hitposition for later use
        hitPosition = randomPosition.id
    }

    square.forEach(id => {
        id.addEventListener("mouseup", () => {
            let hitImg = document.querySelector(".hit");
            
            if (id.id === hitPosition) {
                result = result +1;
                score.textContent = result;
                id.classList.add(`${randomClassChoser(classArray)}`);        
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
        if (currentTime === 10) {
            timeLeft.style.color = "red";
            timeLeft.style.fontSize = "25px";
        }
        if (currentTime < 10) {
            timeLeft.style.fontSize ="20px";
        }

        if (currentTime === 0) {
            clearInterval(timerId);
            gameEndPopUp("times-up", result);
        }

        timeLeft.textContent = currentTime;
    }

    let timerId = setInterval(countDown, 1000);
})
}