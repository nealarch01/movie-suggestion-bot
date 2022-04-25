// Library imports
import axios from "axios"

// Interface imports
import IMovieData from "../interfaces/IMovieData";

// JSON imports
import { tmdb_api_key } from "../../client_config.json";

const genreMap: Map<string, number | undefined> = new Map();
genreMap.set("action", 28);
genreMap.set("adventure", 12);
genreMap.set("animation", 16);
genreMap.set("comedy", 35);
genreMap.set("crime", 80);
genreMap.set("documentary", 99);
genreMap.set("drama", 18);
genreMap.set("family", 10751);
genreMap.set("fantasy", 14);
genreMap.set("history", 36);
genreMap.set("horror", 27);
genreMap.set("music", 10402);
genreMap.set("mystery", 9648);
genreMap.set("romance", 10749);
genreMap.set("sci-fi", 878);
genreMap.set("thriller", 53);
genreMap.set("war", 10752);
genreMap.set("western", 37);

// function generates a random number between 3 and 4
function generatePageNumber() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

async function getRandomMovie(genreInput: string): Promise<IMovieData> {
    let genreID: number | undefined
    if (genreInput !== "") { // If a non-empty string is passed, convert the genre string into an ID
        genreInput = genreInput.toLowerCase(); // First convert to lower case to negate case sensitivity
        genreID = genreMap.get(genreInput); // Get the assigned id value
    }
    // Documentation link for discover: https://developers.themoviedb.org/3/discover/movie-discover

    // If an unknown genre is read, set genreInput to a random valid genre
    if (genreID === undefined) {
        const allGenreKeys = Array.from(genreMap.keys());
        genreInput = allGenreKeys[Math.floor(Math.random() * allGenreKeys.length)];
        genreID = genreMap.get(genreInput);
    }

    let discoverURL: string;
    discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${generatePageNumber()}&with_genres=${genreID}`;
    try {
        let response = await axios.get(discoverURL); // queries an entire list of movies of the specified genre
        if (response.data.total_results === 0) { // case for if the random page number generated does not contain any results
            discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}&with_genres=${genreID}`;
            response = await axios.get(discoverURL); // recall to get the first page data
        }

        // if no data was found again in the first page, throw an error and return unsuccessful
        if (response.data.total_results === 0) {
            throw "No data found";
        }

        const moviesList: Array<object> = response.data.results;

        const randomMovieData: any = moviesList[Math.floor(Math.random() * moviesList.length)];
        // console.log(randomMovieData); // for testing purposes; print to console the movie the random movie that was picked
        return {
            success: true,
            movie_id: randomMovieData.id,
            movie_name: randomMovieData.original_title,
            movie_release_date: randomMovieData.release_date,
            movie_description: randomMovieData.overview,
            movie_user_ratings: randomMovieData.vote_average,
            poster_URL: randomMovieData.poster_path
        };
    } catch (err) {
        console.log('An error has occured getting data (random-movie.ts)');
        return {
            success: false,
            movie_id: -1,
            movie_name: 'null',
            movie_release_date: 'null',
            movie_description: 'null',
            movie_user_ratings: 0,
            poster_URL: null
        };
    }
}

export default getRandomMovie;