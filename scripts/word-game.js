const gameWord       = document.getElementById("wrapper");
const words = ["morot","hopprep","flöjt","solkräm","popcorn","dragspel","kalas"];

const counter = 10; //kanske en let på denna

const getWord = array => {
    let index = Math.floor(Math.random()*array.length);
    return words[index];
}

let eachLetter = getWord(words).split("");
console.log(eachLetter);

const generateLetterBoxes = letters => {
    for(let i = 0; i < letters.length; i++) {
        gameWord.innerHTML = `
        <div>${letters[i]}</div>
        `
    }
}


generateLetterBoxes(eachLetter);