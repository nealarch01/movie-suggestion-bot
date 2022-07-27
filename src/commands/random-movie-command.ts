// API Call imports
import fetchRandomMovie from "../api/random-movie";

// Discord type imports
import { CommandInteraction, Interaction } from "discord.js";

// Interface imports
import MovieInterface from "../interfaces/movie-interface";

// Utility import
import createMovieEmbed from "../create-movie-embed";

const GenreTypes: any = {
    "action": 28,
    "adventure": 12,
    "animation": 16,
    "comedy": 35,
    "crime": 80,
    "documentary": 99,
    "drama": 18,
    "family": 10751,
    "fantasy": 14,
    "history": 36,
    "horror": 27,
    "music": 10402,
    "mystery": 9648,
    "romance": 10749,
    "sci-fi": 878,
    "thriller": 53,
    "war": 10752,
    "western": 37
}

async function randomMovieCommand(interaction: CommandInteraction): Promise<void> {
    const cmdArgs = interaction.options;
    let randomMovie: MovieInterface;
    if (!wasGenreSpecified(cmdArgs)) {
        randomMovie = await fetchRandomMovie();
    } else {
        let genreID: number = GenreTypes[<string>cmdArgs.data[0].value!];
        if (genreID === undefined) {
            interaction.reply(`Unknown genre. The valid genres are: ${validGenres()}`);
            return;
        }
        randomMovie = await fetchRandomMovie(genreID);
    }
    // Evaluate if API fetch was successful
    if (randomMovie.success === true) {
        await interaction.reply({ embeds: [createMovieEmbed(randomMovie)] });
    } else {
        await interaction.reply("There was an error obtaining movie data. Try again.");
    }
}

function wasGenreSpecified(cmdArgs: CommandInteraction["options"]): boolean {
    if (cmdArgs.data.length > 0) {
        if (typeof cmdArgs.data[0].value === "string") {
            return true;
        }
    }
    return false;
}

// This function returns a string containing all the valid genres.
function validGenres(): string {
    let validGenresMessage: string = "";

    const keys = Object.keys(GenreTypes)
    keys.forEach((element: string, index: number) => {
        validGenresMessage += `${element}`
        if (index === keys.length - 1) {
            validGenresMessage += "."
        } else {
            validGenresMessage += ", ";
        }
    });

    return validGenresMessage;
}

export default randomMovieCommand;