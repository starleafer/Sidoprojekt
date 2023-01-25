const linkMineGame = () => {
    const pooGameSquares = document.querySelectorAll('#mine-game-content div');
    let poopArray = []
    const nrOfPoos = 7;
    
    
    //Place poops across the game
    while(poopArray.length < nrOfPoos) {
        const pooPosition = Math.floor(Math.random() * 24)+1;
        if (!poopArray.includes(pooPosition)) {
            poopArray.push(pooPosition);
        }
    }

    for(let poop of poopArray) {
        console.log(`poop: ${poop}`);
        document.querySelector(`#mine-game-content div:nth-child(${poop})`).innerHTML = `
            <img src="./img/poo_1f4a9.png" class="poop-style">
        `;
    }
    console.log(pooGameSquares);


    //FOR NEXT TIME: SQUARE IS NOT A NUMBER
    for (let i=1; i <= pooGameSquares.length; i++) {
        console.log('index' + i);
        let neighborArray = [];
        let numberOfPoopNeightbors = 0;
        if (!poopArray.includes(i)){
            neighborArray = [
                (i-6),(i-5),(i-4),(i-1),
                (i+1),(i+4),(i+5),(i+6)
            ]
            console.log(neighborArray);
        }
        if (i%5 === 0){
            neighborArray.splice(7, 1);
            neighborArray.splice(4, 1);
            neighborArray.splice(2, 1);
            console.log("new array" + neighborArray);
        }
        if ((i-1)%5 === 0){
            neighborArray.splice(5, 1);
            neighborArray.splice(3, 1);
            neighborArray.splice(0, 1);
            console.log("new array" + neighborArray);
        }
        for (let neighbor of neighborArray){
            if (poopArray.includes(neighbor)){
                numberOfPoopNeightbors++;
                console.log(numberOfPoopNeightbors);
                console.log(neighbor + "is included");
            }
        }
    }
}