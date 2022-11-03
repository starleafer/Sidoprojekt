let mainGrid    = document.getElementById('main-grid');
const jsSection = document.getElementById('js-generated-articles');
let articles    = []

function Article(image, imageAlt, title, paragraph) {
    this.image      = image;
    this.imageAlt   = imageAlt;
    this.title      = title;
    this.paragraph  = paragraph;
};

const addArticle = (image, imageAlt, title, paragraph) => {
    const article = new Article(image, imageAlt, title, paragraph);
    articles = [article, ...articles]

    return articles;
}

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

addArticle(
    "death-metal.jpeg",
    "Violin Violence",
    `Death-metal bandet "Violin violence" tillbaka i Sverige på turné`,
    "Nu är de tillbaka! Som det svenska folket har väntat på att headbanga.");
addArticle(
    "interview.jpeg",
    "image",
    "Intervju: Äldre man",
    "Vi intervjuade Mads Epicsson, han hade inget att säga. Vi kan lära oss mycket av Mads.");
addArticle(
    "party-hard.jpeg",
    "image",
    `Agda, 98år - "Ålder stoppar oss inte från att gå cray-cray"`,
    "Dessa damer är just kommit tillbaka från eventet Burning man, detta firas med en ordentlg förfest för att sedan gå vidare till Golden Hits.");

createSections(articles);
