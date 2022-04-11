// Library imports
import axios from "axios";

// JSON imports
import { tmdb_api_key } from "../client_config.json";

async function getMovieTrailer(movie_id: number): Promise<string> {
    // documentation to get video: https://developers.themoviedb.org/3/movies/get-movie-videos
    if (movie_id === -1) {
        return "Could not obtain data of movie requested";
    }
    try {
        let videoURL = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${tmdb_api_key}&language=en-US`;
        let response = await axios.get(videoURL);
        let videosArray = response.data.results;
        if (videosArray === undefined) {
            return "Movie does not have any trailers";
        }
        for (let i = 0; i < videosArray.length; i++) {
            if (videosArray[i].type === "Trailer") {
                // check for empty string as key and if site is hosted on youtube
                if (videosArray[i].site !== "YouTube" && videosArray[i].key === "") {
                    continue;
                } else {
                    return `https://www.youtube.com/watch?v=${videosArray[i].key}`;
                }
            }
        }
        return "No trailer was found";
    } catch (err) {
        console.log("There was an error getting movie trailer");
        return "Error: could not obtain trailer data";
    }
}

export default getMovieTrailer;