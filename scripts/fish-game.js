function linkFishGame() {

    let startButton = document.getElementById("start-btn-fish");

    startButton.addEventListener("click", function () {
        startButton.remove();
        sharkFunction();

        window.addEventListener("keydown", function (event) {
            event.preventDefault();
            switch (event.key) {
                case "ArrowUp":
                    moveUp();
                    break;
                case "ArrowDown":
                    moveDown();
                    break;
            }
        })
    })

    function moveUp() {
        let fish = document.getElementById("fish-img"),
            style = window.getComputedStyle(fish),
            top = style.getPropertyValue("top");
        let topPosition = parseInt(top.slice(0, -2));
        if (topPosition > 20) {
            topPosition -= 10;
        }
        fish.style.top = `${topPosition}px`;

    }
    function moveDown() {
        let fish = document.getElementById("fish-img"),
            style = window.getComputedStyle(fish),
            top = style.getPropertyValue("top");
        let topPosition = parseInt(top.slice(0, -2));
        if (topPosition < 480) {
            topPosition += 10;
        }
        fish.style.top = `${topPosition}px`;
    }
    function sharkFunction() {

        let shark = document.createElement("img");
        shark.setAttribute("src", "img/shark.png");
        shark.setAttribute("id", "shark-img")

        document.getElementById("fish-background").append(shark);



    }

    function checkIfDead() {
        let fishImg = document.getElementById("fish-img");
        let sharkImg = document.getElementById("shark-img");

        var fish = parseInt(window.getComputedStyle(fishImg).getPropertyValue("top"));
        var shark = parseInt(window.getComputedStyle(sharkImg).getPropertyValue("left"));
        console.log(fish);
        console.log(shark);
        if (fish > 400 && fish < 450 && shark < 100 && shark > -100) {
            alert("you dead");
        }
    }

    setInterval(checkIfDead, 100);

    setInterval(sharkFunction, 5000);







}