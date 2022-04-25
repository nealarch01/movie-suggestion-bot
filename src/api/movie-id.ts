// Library imports
import axios from "axios";

// JSON imports
import { tmdb_api_key } from "../../client_config.json";

// this function will return the id of the top result if there are multiple
async function getMovieID(movie_input: string): Promise<number> {
    // documentation link for search: https://developers.themoviedb.org/3/search/search-companies
    try {
        let searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${tmdb_api_key}&language=en-US&query=${movie_input}&page=1&include_adult=false`;
        let response = await axios.get(searchURL);
        if (response.data.total_results === 0) { // no serch results were found
            // console.log("No results were found");
            return -1;
        }
        return response.data.results[0].id;
    } catch (err) {
        console.log("There was an error getting movie data (movie-id.ts)");
        return -1; // return negative number to indicate there was an error obtaining movie data
    }
}

export default getMovieID;