// Interface imports
import MovieInterface from "../interfaces/movie-interface";

// Attribute source to tmdb
import attributeSource_tmdb from "./attribute-tmdb";

function formatMovieMessage(movieData: MovieInterface): string {
    return `
${attributeSource_tmdb("")}
**${movieData.movie_name}**
**Released**: ${movieData.movie_release_date}
**Description**: ${movieData.movie_description}
${(movieData.poster_URL === null) ? "No poster to display" : `[poster](https://image.tmdb.org/t/p/w1280${movieData.poster_URL})`}
`;
}

export default formatMovieMessage;