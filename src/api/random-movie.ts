// Library imports
import axios from "axios"

// Interface imports
import MovieInterface from "../interfaces/movie-interface";

// JSON imports
import { tmdb_api_key } from "../../client_config.json";


// Function that generates a random number between 1 and 20
function generatePageNumber() {
    return Math.floor(Math.random() * (20 - 1) + 1);
}

async function fetchRandomMovie(genreID?: number | undefined): Promise<MovieInterface> {
    // Documentation link for discover: https://developers.themoviedb.org/3/discover/movie-discover
    // Additional note: discover will obtain trending movies
    let discoverURL: string;
    if (genreID === undefined) {
        discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}&region=US&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${generatePageNumber()}`;    
    } else {
        discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}&region=US&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${generatePageNumber()}&with_genres=${genreID}`;
    }
    try {
        let response = await axios.get(discoverURL); // Response will return multiple movies

        const moviesList: Array<object> = response.data.results;

        const randomMovieData: any = moviesList[Math.floor(Math.random() * moviesList.length)]; // Randomly choose from the list of movies returned
        // console.log(randomMovieData); // for testing purposes; print to console the movie the random movie that was picked
        return {
            success: true,
            movie_id: randomMovieData.id,
            movie_name: randomMovieData.original_title,
            movie_release_date: randomMovieData.release_date,
            movie_description: randomMovieData.overview,
            movie_user_ratings: randomMovieData.vote_average,
            poster_id: randomMovieData.poster_path
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
            poster_id: undefined
        };
    }
}

export default fetchRandomMovie;