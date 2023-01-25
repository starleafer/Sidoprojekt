const linkMineGame = () => {
    const pooGameSquares = document.querySelectorAll('#mine-game-content div');
    let poopArray = []
    const nrOfPoos = 7;
    
    let emptySqueres = []
    
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
        }
        if (i%5 === 0){
            neighborArray.splice(7, 1);
            neighborArray.splice(4, 1);
            neighborArray.splice(2, 1);
        }
        if ((i-1)%5 === 0){
            neighborArray.splice(5, 1);
            neighborArray.splice(3, 1);
            neighborArray.splice(0, 1);
        }
        for (let neighbor of neighborArray){
            if (poopArray.includes(neighbor)){
                numberOfPoopNeightbors++;
            }
        }
        emptySqueres.push(numberOfPoopNeightbors);
    }

    // for(let pooSquere of pooGameSquares) {
    //     pooSquere.addEventListener('click', function(){
    //         for (let i=1; i <= pooGameSquares.length; i++) {
                
    //         }
    //     });
        
    
    for(let i=1; i <= pooGameSquares.length; i++) {

        console.log(pooGameSquares[i]);
        pooGameSquares[i-1].addEventListener('click', function(e){
            console.log(poopArray);
            console.log(i);
            if(poopArray.includes(i)) {
                console.log('eeeew');
            } else {
                console.log(e);
                console.log("nr of neighbors "+emptySqueres[i-1]);
                e.target.innerHTML = `<p class="nr-of-poos">${emptySqueres[i-1]}</p>`
            }
        });
        
    }
}