function linkWordGame() {
    let letterA     = document.getElementById('btn-a');
    let letterB     = document.getElementById('btn-b');
    let game2       = document.getElementById("wrapper");
    let gameWord    = document.getElementById("game-word");
    let alphabetContainer = document.getElementById("alphabet-container");
    let letterButtons = document.getElementsByClassName("letter-button")

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"]
    const words = ["morot","hopprep","flöjt","solkräm","popcorn","dragspel","kalas"];

    for (let i of alphabet) {
        let letterButton = document.createElement('button');
        letterButton.innerText = `${i.toUpperCase()}`;
        letterButton.id = `${i}-btn`;
        letterButton.classList.add("letter-buttons");

        letterButton.addEventListener('click', function(e) {
            alert(e.target.innerText);
            
        })

        alphabetContainer.append(letterButton);
    }

    function checkForLetter() {
        let word = getWord();
        for (let )
    }

    const counter = 10; //kanske en let på denna

    const getWord = array => {
        let index = Math.floor(Math.random()*array.length);
        return words[index];
    }

    let eachLetter = getWord(words).split("");
    console.log(eachLetter);

    let generateLetterBoxes = letters => {
        for(let i = 0; i < letters.length; i++) {
            let boxes = document.createElement('div');
            boxes.classList.add('letter-boxes');
            boxes.innerText = `${letters[i].toUpperCase()}`;
            console.log(boxes);
            
            gameWord.append(boxes);
        }
    }


    generateLetterBoxes(eachLetter);

    

}