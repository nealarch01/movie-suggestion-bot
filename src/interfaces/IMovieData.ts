interface IMovieData {
    success: boolean;
    movie_id: number;
    movie_name: string;
    movie_release_date: string;
    movie_description: string;
    movie_user_ratings: number;
    poster_URL?: string | null
}


export default IMovieData;