// Interface imports
import IMovieData from "../interfaces/IMovieData";

// Attribute source to tmdb
import attributeSource_tmdb from "./attribute-tmdb";

function formatMovieMessage(movieData: IMovieData): string {
    return `
${attributeSource_tmdb("")}
**${movieData.movie_name}**
**Released**: ${movieData.movie_release_date}
**Description**: ${movieData.movie_description}
**${movieData.movie_user_ratings}%** liked this movie (tmdb)
${(movieData.poster_URL === null) ? "No poster to display" : `[poster](https://image.tmdb.org/t/p/w1280${movieData.poster_URL})`}
`;
}

export default formatMovieMessage;