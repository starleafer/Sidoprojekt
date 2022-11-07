let mainGrid    = document.getElementById('main-grid');
const jsSection = document.getElementById('js-generated-articles');
let articles    = []

// object template for a Article
function Article(image, imageAlt, title, paragraph) {
    this.image      = image;
    this.imageAlt   = imageAlt;
    this.title      = title;
    this.paragraph  = paragraph;
};

// function that takes 4 parameters, creates a new object with the 4 values and stores the object into the articles[] array and return that array
const addArticle = (image, imageAlt, title, paragraph) => {

    const article = new Article(image, imageAlt, title, paragraph);
    articles = [article, ...articles]

    return articles;
}

addArticle(
    "death-metal.jpeg",
    "Violin Violence",
    `<strong>Musik |</strong> Death-metal bandet "Violin violence" tillbaka i Sverige på turné`,
    "Nu är de tillbaka! Som det svenska folket har väntat på att headbanga."
);

addArticle(
    "interview.jpeg",
    "image",
    "<strong>Intervju |</strong> Äldre man",
    "Vi intervjuade Mads Epicsson, han hade inget att säga. Vi kan lära oss mycket av Mads."
);

addArticle(
    "party-hard.jpeg",
    "image",
    `<strong>Intervju |</strong> Agda, 98år - "<i>Ålder stoppar oss inte från att gå cray-cray</i>"`,
    "Dessa damer är just kommit tillbaka från eventet Burning man, detta firas med en ordentlg förfest för att sedan gå vidare till Golden Hits."
);


// function that generates the html and injects it into <main>
const createSections = (array) => {
    
    let articlesContentHtml = "";
    
    for(object of array) {
        console.log(object);
        articlesContentHtml += `
        <article>
        <img src="img/${object.image}" alt="${object.imageAlt}">
        <h2>${object.title}</h2>
        <p>${object.paragraph}</p>
        <div id="line"></div>
        </article>
        `;
    }
    const articleSection = document.createElement("section");
    articleSection.innerHTML = articlesContentHtml;
    jsSection.append(articleSection);
}

// Calls the function createSections()
createSections(articles);
