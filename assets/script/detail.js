const urlParams = new URLSearchParams(window.location.search);  
const movieId = urlParams.get('id');



const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);

        const data = await response.json();

        document.querySelector('h1').textContent = data.name;
        document.querySelector('p').innerHTML = data.summary; 
        document.querySelector('.card img').src = data.image ? data.image.medium : './assets/img/default.png';
        document.querySelector('.date').innerHTML = data.premiered; 
        document.querySelector('.ended').innerHTML = data.ended || 'Devam Ediyor'; 
        document.querySelector('.genres').innerHTML = data.genres.join(', '); 
        document.querySelector('.rating').innerHTML = data.rating ? data.rating.average : 'N/A';
        document.querySelector('.language').innerHTML = data.language;
        document.querySelector('.Status').innerHTML = data.status;

    } catch (error) {
        window.location.href = `Error.html`; 
    }
};



window.onload = () => {
    if (movieId) {
        getMovieDetails(movieId);
    }
    // else{
    //     window.location.href = `Error.Html`;
    // }

};
