// Discord imports
import { MessageEmbed } from "discord.js";

// Interface imports
import MovieInterface from "../interfaces/movie-interface";

// Attribute source to tmdb
import attributeSource_tmdb from "./attribute-tmdb";

function formatMovieMessage(movieData: MovieInterface): MessageEmbed {
    // Note: MessageEmbed fields cannot have an empty string as a value (API returned nothing)
    if (movieData.movie_name === "" || movieData.movie_description === ""
        || movieData.movie_release_date === "") {
        // Return messageEmbed error
        return new MessageEmbed()
            .setTitle("An error occured, try again");
    }

    let ratingMessage: String; 
    if (movieData.movie_user_ratings === undefined || isNaN(movieData.movie_user_ratings)) {
        ratingMessage = "No ratings";
    } else {
        ratingMessage = `${movieData.movie_user_ratings * 10}% liked this`;
    }

    const messageEmbed = new MessageEmbed()
        .setColor("DARK_GOLD")
        .setTitle(`${movieData.movie_name}`)
        .addFields(
            { name: "Description", value: `${movieData.movie_description} `, inline: false },
            { name: "Released", value: `${movieData.movie_release_date} `, inline: false },
            { name: "Rating", value: `${ratingMessage}`}
        )
        .setFooter({ text: "Movie data obtained from TMDB" })

    if (movieData.poster_id === null || movieData.poster_id === undefined) {
        return messageEmbed;
    }
    // `[poster](https://image.tmdb.org/t/p/w1280${movieData.poster_URL})`
    messageEmbed.setImage(`https://image.tmdb.org/t/p/w1280${movieData.poster_id}`);
    return messageEmbed;
}

export default formatMovieMessage;