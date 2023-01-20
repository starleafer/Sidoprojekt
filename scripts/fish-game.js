function linkFishGame() {
    
    let startButton = document.getElementById("start-btn-fish");
    
    startButton.addEventListener("click", function () {
        startButton.remove();

        //code for parallax-background
        const canvas = document.getElementById("fish-canvas");
        const ctx = canvas.getContext("2d");
        const CANVAS_WIDTH = canvas.width = 800;
        const CANVAS_HEIGHT = canvas.height = 500;
    
        const fish_backround = new Image();
        fish_backround.src = "img/fish-game/background.png";
        const fish_backround2 = new Image();
        fish_backround2.src = "img/fish-game/transparent-background.png";
        const fish_school1 = new Image();
        fish_school1.src = "img/fish-game/yellow-fishschool.png";
        const fish_school2 = new Image();
        fish_school2.src = "img/fish-game/blue-fishschool.png";
        const fish_waves = new Image();
        fish_waves.src = "img/fish-game/waves.png";
        const fish_sand = new Image();
        fish_sand.src = "img/fish-game/sand.png";
        const coral1 = new Image();
        coral1.src ="img/fish-game/coral1.png";
        const coral2 = new Image();
        coral2.src ="img/fish-game/coral2.png";
        const coral3 = new Image();
        coral3.src ="img/fish-game/coral3.png";
        const coral4 = new Image();
        coral4.src ="img/fish-game/coral3.png";



        let x = 0;
        let x2 = 800;

        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            ctx.drawImage(fish_backround, 0, 0)
            // ctx.drawImage(coral2, x, 0)
            ctx.drawImage(fish_school2, x, 0)
            ctx.drawImage(coral1, x, 0)
            ctx.drawImage(coral3, x, 0)
            ctx.drawImage(coral1, x2, 0)
            ctx.drawImage(coral3, x2, 0)
            ctx.drawImage(fish_school1, x, 0)
            ctx.drawImage(fish_backround2, 0, 0)
            
            
            ctx.drawImage(fish_sand, x, 0)
            ctx.drawImage(fish_waves, x, 0)
            ctx.drawImage(fish_sand, x2, 0)
            ctx.drawImage(fish_waves, x2, 0)
            
            // ctx.drawImage(coral4, x, 0)
            
            if (x < -800) {
                x = 799 +x2;
            } else {
                x--;
            }

            if (x2 < -800) {
                x2 = 799 + x;
            } else {
                x2--;
            }
            requestAnimationFrame(animate);
        }

        animate();


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
                if (topPosition > 80) {
                    topPosition -= 10;
                }
                fish.style.top = `${topPosition}px`;
                
            }
            function moveDown() {
                let fish = document.getElementById("fish-img"),
                style = window.getComputedStyle(fish),
                top = style.getPropertyValue("top");
                let topPosition = parseInt(top.slice(0, -2));
                if (topPosition < 460) {
                    topPosition += 10;
                }
                fish.style.top = `${topPosition}px`;
            }
            function sharkFunction() {
                
                let shark = document.createElement("img");
                shark.setAttribute("src", "img/fish-game/shark-small.png");
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
            
            //setInterval(sharkFunction, 5000);
            
            
        }