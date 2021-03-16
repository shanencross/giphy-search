import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("#requestButton").click(function(event) {
    event.preventDefault();
    let search = $('form#searchForm #searchInput').val();
    $('#searchInput').val('')
    let imageLimit = $('form#searchForm #imageLimitInput').val();
    $('#imageLimitInput').val('');

    console.log(search + " " + imageLimit);

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=${imageLimit}&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200)
        {
            const response = JSON.parse(this.responseText);
            getElements(response);
        }
    };

    request.open("GET", url, true);
    request.send();
});

function getElements(response) {
    $("#photo").html(`<img src="${response.data[0].images.original.url}">`);
}   