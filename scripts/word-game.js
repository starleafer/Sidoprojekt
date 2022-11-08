function linkWordGame() {
    let gameWord    = document.getElementById("game-word");
    let alphabetContainer = document.getElementById("alphabet-container");
    let letterButtons = document.getElementsByClassName("letter-button")
    
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"]
    const words = ["morot","hopprep","flöjt","solkräm","popcorn","dragspel","kalas"];
    let rightLetters = '';
    
    let getWord = array => {
        let index = Math.floor(Math.random()*array.length);
        return words[index];
    }

    // BUG REMINDER, man kan vinna innan alla rutor är ifylda
    
    let randomWord = getWord(words);
    let eachLetter = randomWord.split("");
    let counter = 15;
    let letterButton;

    for (let i of alphabet) {
        letterButton = document.createElement('button');
        letterButton.innerText = `${i.toUpperCase()}`;
        letterButton.id = `${i}-btn`;
        letterButton.classList.add("letter-buttons");
        letterButton.classList.add("btn-green");
        
        letterButton.addEventListener('click', function(e) {
            checkForLetter(i);
            if(counter == 0) {
                alert("loser");
            }

            if(rightLetters.length == randomWord.length) {
                alert("You've vann!!!!!!!");
            }
            
        })
        
        alphabetContainer.append(letterButton);
    }
    
    function checkForLetter(char) {
        let usedLetter = document.getElementById(`${char}-btn`);
        var indexes = []
        
        if (randomWord.includes(char)){
            console.log(randomWord.indexOf(char));
            
            for(let i = 0; i < randomWord.length; i++) {
                if(randomWord[i] === char) {
                    indexes.push(i);
                    for(let i of indexes) {
                                gameWord.children[i].innerText = `${char.toUpperCase()}`;
                                rightLetters += char;
                            }
                            console.log(indexes);
                        }
                    }
                    
                } else {
                    counter--;
                    console.log(`${char} is NOT in the word`);
                    console.log(counter);
                }
                usedLetter.classList.add("btn-fade");
                usedLetter.setAttribute('disabled', '');
            }
            
            
            
    console.log(eachLetter);
    
    let generateLetterBoxes = letters => {
        for(let i = 0; i < letters.length; i++) {
            let boxes = document.createElement('div');
            boxes.classList.add('letter-boxes');
            // boxes.innerText = `${letters[i].toUpperCase()}`;
            console.log(boxes);
            
            gameWord.append(boxes);
        }
    }
    
    
    generateLetterBoxes(eachLetter);
    
    
    
}