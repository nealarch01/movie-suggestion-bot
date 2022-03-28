import axios from "axios"

import IMovieData from "./IMovieData";

import { tmdb_api_key } from "../client_config.json";


const movieGenres: Array<string> = ["action", "adventure", "animation", "comedy", "drama", "fantasy", "musicals", "historical", "romance", "sci-fi", "thriller", "horror", "war"]



async function getRandomMovie(genreInput: string): Promise<IMovieData> {
    if (genreInput === '') { // empty string assign a random genre
        genreInput = movieGenres[Math.floor(Math.random() * movieGenres.length)];
    }
    try {
        // documetation link: https://developers.themoviedb.org/3/discover/movie-discover
        const movieListURL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}&language=en-US&sort_by=popularity.desc&include=${genreInput}&include_adult=false&include_video=false&page=1`;
        const response = await axios.get(movieListURL); // queries an entire list of movies of
        const moviesList: Array<object> = response.data.results;
        const randomMovieData: any = moviesList[Math.floor(Math.random() * moviesList.length)];
        console.log(randomMovieData); // for testing purposes; print to console the movie generated
        return {
            success: true,
            movie_id: randomMovieData.id,
            movie_name: randomMovieData.original_title
        }
    } catch (err) {
        console.log('An error has occured');
        return {
            success: false,
            movie_id: -1,
            movie_name: 'null'
        };
    }
}

export default getRandomMovie;