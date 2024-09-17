let currentPage = 0; 
let data = []; 

const getData = async (page = 0) => {
  if (data.length === 0) { 
    const response = await fetch(`https://api.tvmaze.com/shows`);
    data = await response.json(); 
  }

  const moviesContainer = document.querySelector(".movie-cards");
  const SwipperContainer = document.querySelector(".swiper-wrapper");

  const moviesToDisplay = data.slice(page * 20, (page + 1) * 20);

  moviesToDisplay.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("card");

    const imageUrl = movie.image
      ? movie.image.medium
      : "./assets/img/default.png";

    movieCard.innerHTML = `
            <img src="${imageUrl}" alt="${movie.name}" width="25%">
            <div class="item">
              <p style="color: white;">${movie.name}</p>
              <i class="fa-solid fa-heart"></i>
            </div>
        `;

    moviesContainer.appendChild(movieCard);

    movieCard.addEventListener("click", () => {
      showMovieDetails(movie.id);
    });
  });

  moviesToDisplay.forEach((movie) => {
    const SwiperSLideDiv = document.createElement("div");
    SwiperSLideDiv.classList.add("swiper-slide");

    const movieCard = document.createElement("div");
    movieCard.classList.add("card");

    const imageUrl = movie.image
      ? movie.image.medium
      : "./assets/img/default.png";

    movieCard.innerHTML = `
            <img src="${imageUrl}" alt="${movie.name}" width="25%">
            <div class="item">
              <p style="color: white;">${movie.name}</p>
              <i class="fa-solid fa-heart"></i>
            </div>
        `;

    SwiperSLideDiv.appendChild(movieCard);
    SwipperContainer.appendChild(SwiperSLideDiv);
  });
};

const showMovieDetails = (movieId) => {
  window.location.href = `detail.html?id=${movieId}`;
};

window.onload = () => {
  getData(currentPage);
};

document.querySelector(".LoadMore button").addEventListener("click", () => {
  currentPage++; 
  getData(currentPage); 
});
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 5,
});

const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  const data = await response.json();

  const moviesContainer = document.querySelector(".movie-cards");
  moviesContainer.innerHTML = "";
  data.forEach((item) => {
    const movie = item.show;

    const movieCard = document.createElement("div");
    movieCard.classList.add("card");

    const imageUrl = movie.image
      ? movie.image.medium
      : "./assets/img/default.png";
    movieCard.innerHTML = `
          <img src="${imageUrl}" alt="${movie.name}" width="25%">
          <div class="item">
            <p style="color: white;">${movie.name}</p>
            <i class="fa-solid fa-heart"></i>
          </div>
      `;

    moviesContainer.appendChild(movieCard);

    movieCard.addEventListener("click", () => {
      showMovieDetails(movie.id);
    });
  });
};

window.onload = () => {
  getData(currentPage);
};

document.querySelector(".LoadMore button").addEventListener("click", () => {
  currentPage++;
  getData(currentPage);
});

document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  searchMovies(query);
});

document.getElementById("searchInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});


function redirectToLogin() {
    window.location.href = "login.html";  
}
function redirectToRegister() {
    window.location.href = "Register.html";  
}


