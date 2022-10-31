const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		// console.log(this.responseText);
        let str = this.responseText;
        let json = JSON.parse(str);
        document.getElementById("vader-api").innerHTML = json.value;
	}
});

xhr.open("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("X-RapidAPI-Key", "c039d7b0c5msh324122ad4915cfap146c4bjsnb594a77cb312");
xhr.setRequestHeader("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com");

xhr.send(data);
