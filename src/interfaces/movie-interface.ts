interface MovieInterface {
    success: boolean;
    movie_id: number;
    movie_name: string;
    movie_release_date: string;
    movie_description: string;
    movie_user_ratings: number;
    poster_id: string | undefined
}


export default MovieInterface;