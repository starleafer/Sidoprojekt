function linkFishGame() {

    let startButton = document.getElementById("start-btn-fish");

    startButton.addEventListener("click", function() {
        startButton.remove();

        window.addEventListener("keydown", function(event) {
            event.preventDefault();
            switch(event.key) {
                case "ArrowUp": 
                    console.log("upp");
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
        console.log(top.slice(0, -2));

    }







}