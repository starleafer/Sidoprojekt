function linkFishGame() {
    
    let startButton = document.getElementById("start-btn-fish");
    
    startButton.addEventListener("click", function () {
        startButton.remove();

        //code for parallax-background
        const canvas = document.getElementById("fish-canvas");
        const ctx = canvas.getContext("2d");
        const CANVAS_WIDTH = canvas.width = 800;
        const CANVAS_HEIGHT = canvas.height = 500;

        let gamespeed = 2;
    
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
        const coral3 = new Image();
        coral3.src ="img/fish-game/coral3.png";

        class background_layer {
            constructor (image, speedModifier) {
                this.x = 0;
                this.y = 0;
                this.width = 800;
                this.height = 480;
                this.x2 = this.width;
                this.image = image;
                this.speedModifier = speedModifier;
                this.speed = gamespeed * speedModifier;
            }

            update(){
                this.speed = gamespeed * this.speedModifier;
                if (this.x <= -this.width) {
                    this.x = this.width + this.x2 - this.speed;
                }

                if (this.x2 <= -this.width) {
                    this.x2 = this.width + this.x - this.speed;
                }
                this.x = Math.floor(this.x - this.speed);
                this.x2 = Math.floor(this.x2 - this.speed);
            }

            draw() {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
                ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
            }
        }

        const bgLayer1 = new background_layer(fish_backround, 0);
        const bgLayer2 = new background_layer(fish_school2, 1.5);
        const bgLayer3 = new background_layer(coral1, 0.5);
        const bgLayer4 = new background_layer(coral3, 0.5);
        const bgLayer5 = new background_layer(fish_school1, 0.8);
        const bgLayer6 = new background_layer(fish_backround2, 0);
        const bgLayer7 = new background_layer(fish_sand, 0.5);
        const bgLayer8 = new background_layer(fish_waves, 0.8);

        const bgObjects = [bgLayer1, bgLayer2, bgLayer3, bgLayer4, bgLayer5, bgLayer6, bgLayer7, bgLayer8]

        // let x = 0;
        // let x2 = 800;

        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            bgObjects.forEach(layer => {
                layer.update();
                layer.draw();
            })

            requestAnimationFrame(animate);

            // ctx.drawImage(fish_backround, 0, 0)
        
            // ctx.drawImage(fish_school2, x, 0)
            // ctx.drawImage(coral1, x, 0)
            // ctx.drawImage(coral3, x, 0)
            // ctx.drawImage(coral1, x2, 0)
            // ctx.drawImage(coral3, x2, 0)
            // ctx.drawImage(fish_school1, x, 0)
            // ctx.drawImage(fish_backround2, 0, 0)
            
            
            // ctx.drawImage(fish_sand, x, 0)
            // ctx.drawImage(fish_waves, x, 0)
            // ctx.drawImage(fish_sand, x2, 0)
            // ctx.drawImage(fish_waves, x2, 0)
            
            
            
            // if (x < -800) {
            //     x = 799 +x2;
            // } else {
            //     x--;
            // }

            // if (x2 < -800) {
            //     x2 = 799 + x;
            // } else {
            //     x2--;
            // }
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