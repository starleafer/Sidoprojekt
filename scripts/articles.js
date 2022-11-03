let mainGrid = document.getElementById('main-grid');
const jsSection = document.getElementById('js-generated-articles');
const articleSection = document.createElement("section");

let articles = []

function Article(image, imageAlt, title, paragraph) {
    this.image = image;
    this.imageAlt = imageAlt;
    this.title = title;
    this.paragraph = paragraph;

    this.articleTemplate = function() { return `
        <section>
        <img src="img/${this.image}" alt="${this.imageAlt}">
        <h2>${this.title}</h2>
        <p>${this.paragraph}</p>
        <div id="line"></div>
        </section>
        `;
    }
};

const addArticle = (image, imageAlt, title, paragraph) => {
    const article = new Article(image, imageAlt, title, paragraph);
    articles = [article, ...articles]

    return articles;
}

addArticle("death-metal.jpeg","image","Title", "Paragraph");
addArticle("interview.jpeg","image","Title", "Paragraph");
addArticle("party-hard.jpeg","image","Title", "Paragraph");

console.log(articles);

const createSections = (array) => {
 
            for(object of array) {
                console.log(object);
                articleSection.innerHTML = `
                <section>
                <img src="img/${object.image}" alt="${object.imageAlt}">
                <h2>${object.title}</h2>
                <p>${object.paragraph}</p>
                <div id="line"></div>
                </section>
                `;
                jsSection.append(articleSection);
            }
}

const article = {
    image: "",
    imageAlt: "",
    title: "",
    paragraph: ""
};



console.log(createSections(articles));
createSections(articles);