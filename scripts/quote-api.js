// IMGFLIP

const getMemes = async () => {
    try {
        const response = await fetch('https://api.goprogram.ai/inspiration');
        const data = await response.json();

        console.log(data);

       document.getElementById('weather-side').innerHTML = `Quote of le hour: ${data.quote} by ${data.author}`

        
    } catch (error) {
        
    }
}

getMemes();