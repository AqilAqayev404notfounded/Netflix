const urlParams = new URLSearchParams(window.location.search);  
const movieId = urlParams.get('id');

const getMovieDetails = async (movieId) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
    const data = await response.json();

    document.querySelector('h1').textContent = data.name;
    document.querySelector('p').innerHTML = data.summary; 
    document.querySelector('.card img').src = data.image ? data.image.medium :'./assets/img/default.png';
    document.querySelector('.date').innerHTML = data.premiered; 
 
    };


window.onload = () => {
    if (movieId) {
        getMovieDetails(movieId);
    }
};
