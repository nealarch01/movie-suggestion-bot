// API Call imports
import getRandomMovie from "../api/random-movie";

// Discord type imports
import { CommandInteraction, Interaction } from "discord.js";

// Interface imports
import MovieInterface from "../interfaces/movie-interface";

// Utility import
import formatMovieMessage from "../utils/format-movie-message";

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
        randomMovie = await getRandomMovie();
    } else {
        let genreID: number = GenreTypes[<string>cmdArgs.data[0].value!];
        if (genreID === undefined) {
            interaction.reply(`Unknown genre. The valid genres are: ${validGenresMessage()}`);
            return;
        }
        randomMovie = await getRandomMovie(genreID);
    }
    
    // let generatedMovie: MovieInterface = await getRandomMovie(GenreTypes[specifiedGenre]);

    if (randomMovie.success === true) {
        await interaction.reply({ embeds: [formatMovieMessage(randomMovie)] });
    } else {
        await interaction.reply("There was an error obtaining movie data");
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

function validGenresMessage(): string {
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