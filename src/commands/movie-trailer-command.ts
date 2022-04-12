// Discord type imports
import { CommandInteraction } from "discord.js";

// API imports
import getMovieTrailer from "../api/movie-trailer";
import getMovieID from "../api/movie-id";

async function movieTrailerCommand(interaction: CommandInteraction): Promise<void> {
    const commandArguments = interaction.options;
    if (commandArguments.data.length === 0) {
        await interaction.reply("Please specify the movie name");
        return;
    }
    let movieID: number = await getMovieID(commandArguments.data[0].value!.toString());
    let movieTrailerLink = await getMovieTrailer(movieID);
    await interaction.reply(movieTrailerLink);
}

export default movieTrailerCommand;