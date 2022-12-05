function linkWordGame() {
    let gameWord = document.getElementById("game-word");
    let alphabetContainer = document.getElementById("alphabet-container");

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "å", "ä", "ö"]

    const words = ["adress", "advokat", "affär", "afton", "apelsin", "apparat",
        "arbetsplats", "askkopp", "avdelning", "bagare", "bakelse", "balkong", "banan",
        "bandspelare", "barnskötare", "berättelse", "biljett", "blomma", "brandman",
        "brevlåda", "bulle", "bussförare", "butik", "chaufför", "check", "cigarrett",
        "citron", "cykel", "dator", "deltagare", "diskbänk", "diskmaskin", "dotter",
        "dräkt", "dusch", "elefant", "expedit", "fabrik", "familj", "farbror",
        "fjärrkontroll", "flaska", "flicka", "fluga", "flygplats", "fläkt", "fotboll",
        "fotbollsspelare", "frisör", "frukost", "frukt", "fysiker", "fågel", "fåtölj",
        "förman", "förmiddag", "förälder", "gaffel", "gardin", "glass", "grönsak",
        "gurka", "handduk", "handske", "hustru", "hylla", "hållplats", "händelse",
        "högtalare", "idiot", "jacka", "jordgubbe", "journalist", "jumper",
        "järnvägsstation", "kalender", "kamera", "kamrat", "karta", "kassa", "kasse",
        "kassörska", "kille", "kiosk", "klocka", "klädhängare", "klänning", "kokbok",
        "kompis", "kostym", "krona", "kropp", "kudde", "kusin", "kvinna", "källare",
        "lampa", "lucka", "lunch", "lägenhet", "läkare", "lärare", "madrass", "mamma",
        "mangel", "maskin", "matta", "medicin", "mekaniker", ",mening", "minut", "moder",
        "morbror", "morgon", "morot", "moster", "musiker", "målare", "månad", "människa",
        "möbel", "mössa", "nagel", "nyckel", "ordningsman", "pappa", "paprika", "pennvässare",
        "person", "personuppgift", "plånbok", "pojke", "polis", "radio", "restaurang",
        "räkning", "servitris", "servitör", "signal", "sjöman", "skillnad", "skola",
        "skomakare", "skådespelare", "släkting", "soffa", "sommar", "soppa", "sotare",
        "spegel", "station", "stereo", "strand", "strumpa", "svärson", "syster", "tabell",
        "tandborste", "tandkräm", "tanke", "tavla", "taxichaufför", "teater", "tekniker",
        "telefon", "telefonsvarare", "tidning", "timme", "toalett", "toalettstol", "tomat",
        "tomte", "torktumlare", "trappa", "triangel", "tröja", "tulpan", "turist", "tvättfat",
        "tvättmaskin", "tvättstuga", "tårta", "tändare", "vante", "vecka", "verkstad",
        "video", "villa", "vinter", "våning", "vårdcentral", "väska", "ändelse", "övning",
        "ansikte", "apotek", "arbete", "armband", "askfat", "badkar", "badrum", "besök",
        "bibliotek", "bilmärke", "block", "bälte", "checkhäfte", "dagis", "datum", "element",
        "exempel", "flerfamiljehus", "frimärke", "fängelse", "fönster", "hallon", "halsband",
        "hjärta", "huvud", "hårstrå", "häfte", "intresse", "kapitel", "konto", "kvitto",
        "lexikon", "meddelande", "nummer", "område", "paket", "papper", "piano", "plommon",
        "porto", "problem", "program", "päron", "radergummi", "samtal", "schampo", "schema",
        "snöre", "sovrum", "språk", "strykbräde", "strykjärn", "ställe", "suddgummi",
        "syskon", "system", "toalettpapper", "torkskåp", "tuggummi", "tvättställ", "täcke",
        "universitet", "vardagsrum", "vatten", "väder", "äpple", "ärende"
    ];

    let rightLetters = '';

    let getWord = array => {
        let index = Math.floor(Math.random() * array.length);
        return words[index];
    }

    let randomWord = getWord(words);
    let eachLetter = randomWord.split("");
    let counter = 10;
    let letterButton;
    
    for (let i of alphabet) {
        letterButton = document.createElement('button');
        letterButton.innerText = `${i.toUpperCase()}`;
        letterButton.id = `${i}-btn`;
        letterButton.classList.add("letter-buttons");
        letterButton.classList.add("btn-green");
        
        letterButton.addEventListener('click', function (e) {
            checkForLetter(i);
            if (counter == 0) {
                gameEndPopUp("loose");
            }
            
            if (rightLetters.length == randomWord.length) {
                gameEndPopUp("win");
            }
            
            console.log(rightLetters);
            console.log(randomWord);
            
        })
        
        alphabetContainer.append(letterButton);
    }
    
    function checkForLetter(char) {
        let usedLetter = document.getElementById(`${char}-btn`);
        var indexes = []
        
        if (randomWord.includes(char)) {
            
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === char) {
                    indexes.push(i);
                }
            }
            
            for (let i of indexes) {
                gameWord.children[i].innerText = `${char.toUpperCase()}`;
                rightLetters += char;
            }
            console.log(indexes);
        }
        
        else {
            counter--;
            console.log(`${char} is NOT in the word`);
            console.log(counter);
            let firstCake = document.querySelector("#cake-wrapper").firstElementChild.nextElementSibling;
            firstCake.remove();
        }
        usedLetter.classList.add("btn-fade");
        usedLetter.setAttribute('disabled', '');
    }

    console.log(eachLetter);

    let generateLetterBoxes = letters => {
        for (let i = 0; i < letters.length; i++) {
            let boxes = document.createElement('div');
            boxes.classList.add('letter-boxes');
            console.log(boxes);
            gameWord.append(boxes);
        }
    }
    generateLetterBoxes(eachLetter);
}