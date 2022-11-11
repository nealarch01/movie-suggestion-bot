import { SlashCommandBuilder } from "@discordjs/builders";

export const movieBotCommands: Array<Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">> = [
    // returns a random movie title
    new SlashCommandBuilder()
        .setName('movie-random')
        .setDescription('Gives you a random movie suggestion')
        .addStringOption(movieGenre => movieGenre
            .setName('genre')
            .setRequired(false)
            .setDescription('specify a genre of movie to generate')),
    // returns a link to the movie trailer of a movie entered
    new SlashCommandBuilder()
        .setName('movie-trailer')
        .setDescription('Sends a link of the movie trailer')
        .addStringOption(movieName => movieName
            .setName('name')
            .setRequired(true)
            .setDescription('name of movie'))
];

export default movieBotCommands;
