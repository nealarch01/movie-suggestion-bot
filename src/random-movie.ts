import axios from "axios"

import IMovieData from "./interfaces/IMovieData";

import { tmdb_api_key } from "../client_config.json";


const movieGenres: Array<string> = ["action", "adventure", "animation", "comedy", "drama", "fantasy", "musicals", "historical", "romance", "sci-fi", "thriller", "horror", "western", "war"]

const genreMap: Map<string, string | undefined> = new Map();
genreMap.set("action", "28");
genreMap.set("adventure", "12");
genreMap.set("animation", "16");
genreMap.set("comedy", "35");
genreMap.set("crime", "80");
genreMap.set("documentary", "99");
genreMap.set("drama", "18");
genreMap.set("family", "10751");
genreMap.set("fantasy", "14");
genreMap.set("history", "36");
genreMap.set("horror", "27");
genreMap.set("music", "10402");
genreMap.set("mystery", "9648");
genreMap.set("romance", "10749");
genreMap.set("sci-fi", "878");
genreMap.set("thriller", "53");
genreMap.set("war", "10752");
genreMap.set("western", "37");




async function getRandomMovie(genreInput: string): Promise<IMovieData> {
    genreInput = genreInput.toLowerCase(); // convert to lowercase
    var randomGenre = movieGenres[Math.floor(Math.random() * movieGenres.length)]; 

    // documetation link for discover: https://developers.themoviedb.org/3/discover/movie-discover
    var discoverURL: string;
    var genreID = genreMap.get(genreInput); // get the assigned id value
    if (genreID === undefined) {
        genreInput = movieGenres[Math.floor(Math.random() * movieGenres.length)];
        genreID = genreMap.get(genreInput);
    }
    discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`;
    try {
        const response = await axios.get(discoverURL); // queries an entire list of movies of
        const moviesList: Array<object> = response.data.results;
        const randomMovieData: any = moviesList[Math.floor(Math.random() * moviesList.length)];
        console.log(randomMovieData); // for testing purposes; print to console the movie generated
        return {
            success: true,
            movie_id: randomMovieData.id,
            movie_name: randomMovieData.original_title,
            movie_release_date: randomMovieData.release_date,
            movie_description: randomMovieData.overview,
            movie_user_ratings: randomMovieData.vote_average,
            poster_URL: randomMovieData.poster_path
        }
    } catch (err) {
        console.log('An error has occured');
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