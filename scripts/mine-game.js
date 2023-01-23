const linkMineGame = () => {
    const pooGameSquares = document.querySelectorAll('#mine-game-content div');
    let poopArray = []
    const nrOfPoos = 7;
    
    
    //Place poops across the game
    while(poopArray.length < nrOfPoos) {
        const pooPosition = Math.floor(Math.random() * 24);
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
    for (let square of pooGameSquares) {
        console.log(square-6);
        if (!poopArray.includes(square)){
            let neighborArray = [
                (square-6),(square-5),(square-4),(square-1),
                (square+1),(square+4),(square+5),(square+6)
            ]
            console.log(neighborArray);
        }
    }
}