// API Call imports
import getRandomMovie from "../api/random-movie";

// Discord type imports
import { CommandInteraction } from "discord.js";

// Interface imports
import MovieInterface from "../interfaces/movie-interface";

// Utility import
import formatMovieMessage from "../utils/format-movie-message";

const validGenres: Array<string> = ["action",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "drama",
    "documentary",
    "fantasy",
    "family",
    "music",
    "musicals",
    "historical",
    "romance",
    "sci-fi",
    "thriller",
    "horror",
    "western",
    "war"
];

async function randomMovieCommand(interaction: CommandInteraction): Promise<void> {
    const commandArguments = interaction.options;
    let specifiedGenre: string = "";
    if (commandArguments.data.length > 0) { // There is a parameter (genre input)
        if (typeof(commandArguments.data[0].value) === "string") { 
            specifiedGenre = commandArguments.data[0].value;
            if (!validGenres.includes(specifiedGenre.toLowerCase())) { // Check if a valid genre is entered
                // Reject invalid genre input
                await interaction.reply(`Invalid genre.\nThe valid genres are: ${ await genreTypesMessage() }`);
                return;
            }
        }
    }
    // If a genre is not specified, then an empty string is passed
    let generatedMovie: MovieInterface = await getRandomMovie(specifiedGenre);
    if (generatedMovie.success === true) {
        await interaction.reply(`${formatMovieMessage(generatedMovie)}`);
    } else {
        await interaction.reply("There was an error obtaining movie data");
    }
}

async function genreTypesMessage(): Promise<string> {
    let validGenresMessage: string = "";
    validGenres.forEach((element: string, index: number) => {
        validGenresMessage += `${element}`
        if (index === validGenres.length - 1) {
            validGenresMessage += '.';
        } else {
            validGenresMessage += ', ';
        }
    });
    return validGenresMessage;
}



export default randomMovieCommand;