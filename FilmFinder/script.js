
const theMovieUl = movies;
const imdbUrl = "https://www.imdb.com/title/";
const getTheUl = document.getElementById("poster-images");

const addMoviesToDom = (array) => {
    getTheUl.replaceChildren();
    array.map((movie) => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        const addIMG = document.createElement("img");
        getTheUl.appendChild(newLi);
        newLi.appendChild(newA);
        newA.append(addIMG);
        newA.setAttribute("href", imdbUrl + movie.imdbID);
        newA.setAttribute("target", "_new");
        addIMG.src = movie.poster;
    });
};
addMoviesToDom(movies);

// const filterMovies = (wordInMovie) => {
function filterMovies(wordInMovie) {
    if (wordInMovie === "latest") {
        const yearSearch = movies.filter(movies => movies.year >= 2014);
        console.log("Show latest movies", yearSearch);
        addMoviesToDom(yearSearch);
    } else {
        const filteredMovies = movies.filter(movies => movies.title.toLowerCase().includes(wordInMovie.toLowerCase()))
        console.log("filteredMovies:", filteredMovies);
        addMoviesToDom(filteredMovies);
    }
};


const zoekVeld = document.getElementById('zoekVeld');

zoekVeld.addEventListener('keyup', (e) => {
    filterMovies(e.target.value)
});

const handleOnChangeEvent = (event) => {
    console.log(event.target.value);
    switch (event.target.value) {
        case "latestMovies":
            filterMovies("latest");
            break;
        case "avengerMovies":
            filterMovies("Avenger");
            break;
        case "xmenMovies":
            filterMovies("X-Men");
            break;
        case "princessMovies":
            filterMovies("Princess");
            break;
        case "batmanMovies":
            filterMovies("Batman");
            break;
    };
};


const latestFilter = document.getElementById("latestButton");
latestFilter.addEventListener("change", handleOnChangeEvent);

const avengerFilter = document.getElementById("avengerButton");
avengerFilter.addEventListener("change", handleOnChangeEvent);

const xmenFilter = document.getElementById("xmenButton");
xmenFilter.addEventListener("change", handleOnChangeEvent);

const princessFilter = document.getElementById("princessButton");
princessFilter.addEventListener("change", handleOnChangeEvent);

const batmanFilter = document.getElementById("batmanButton");
batmanFilter.addEventListener("change", handleOnChangeEvent);














