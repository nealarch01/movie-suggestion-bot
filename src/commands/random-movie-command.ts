// API Call imports
import getRandomMovie from "../api/random-movie";

// Discord type imports
import { CommandInteraction } from "discord.js";

// Interface imports
import IMovieData from "../interfaces/IMovieData";

// Utility import
import formatMovieMessage from "../utils/format-random-movie";

async function randomMovieCommand(interaction: CommandInteraction): Promise<void> {
    const commandArguments = interaction.options;
    let specifiedGenre: string = "";
    if (commandArguments.data.length > 0) {
        // generate a random movie of the specified genre
        if (typeof(commandArguments.data[0].value) === "string") {
            specifiedGenre = commandArguments.data[0].value;
        }
    }
    let generatedMovie: IMovieData = await getRandomMovie(specifiedGenre);
    if (generatedMovie.success === true) {
        await interaction.reply(`${formatMovieMessage(generatedMovie)}`);
    } else {
        await interaction.reply("There was an error obtaining movie data");
    }
}

export default randomMovieCommand;