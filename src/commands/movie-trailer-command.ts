// Discord type imports
import { CommandInteraction } from "discord.js";

// API imports
import fetchMovieTrailer from "../api/movie-trailer";
import fetchMovieID from "../api/movie-id";

async function movieTrailerCommand(interaction: CommandInteraction): Promise<void> {
    const commandArguments = interaction.options;
    if (commandArguments.data.length === 0) {
        await interaction.reply("Please specify a movie name.");
        return;
    }
    let movieID: number = await fetchMovieID(commandArguments.data[0].value!.toString());
    let movieTrailerLink = await fetchMovieTrailer(movieID);
    await interaction.reply(movieTrailerLink);
}

export default movieTrailerCommand;