function linkWordGame() {
    let letterA     = document.getElementById('btn-a');
    let letterB     = document.getElementById('btn-b');
    let game2       = document.getElementById("wrapper");
    let gameWord    = document.getElementById("game-word");
    const words = ["morot","hopprep","flöjt","solkräm","popcorn","dragspel","kalas"];

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

    letterA.addEventListener('click', function(e){
        for(let letter of eachLetter){
            if(letter == e.target.innerText){

            }
        }
    })

}