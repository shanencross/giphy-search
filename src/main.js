// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



let request = new XMLHttpRequest();
const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=ryan gosling&limit=5&offset=0&rating=g&lang=en`;

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200)
    {
        const response = JSON.parse(this.responseText);
        getElements(response);
    }
}

request.open("GET", url, true);
request.send();

function getElements(response) {
    console.log(response.data[0].url)
}