// This only needs to be ran once
// However, if changes are made, then rerunning this is necessary
// Script has already been defined as: npm run deploy-commands

import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord.js/node_modules/discord-api-types/v9";
import { discord_token, discord_clientID, personal_guildID } from '../client_config.json';

const allGenres: Array<[string, string]> = [['Horror', 'Scary movies'],
['Comedy', 'Funny movies']];

// registering bot commands through an array of SlashCommandBuilders
const movieBotCommands = [
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

const rest = new REST({ version: '9' }).setToken(discord_token);

rest.put(Routes.applicationGuildCommands(discord_clientID, personal_guildID), { body: movieBotCommands })
    .then(() => console.log('Commands successfully registered'))
    .catch((err) => console.log(err, "\nAn error has occured registering commands"));