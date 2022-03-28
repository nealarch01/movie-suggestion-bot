import { Client, Intents, Interaction } from 'discord.js';
import { discord_token } from '../client_config.json';

// interface imports
import IMovieData from './IMovieData'; // interface for generic movie data {success, movie_id, movie_name}

import getRandomMovie from './random-movie';

// initiate the client
const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS] });

// event listener to start
discordClient.once('ready', () => {
    console.log('The bot is now running');
});

discordClient.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        // checks if the interaction (message) is a command
        return;
    }
    const commandSent = interaction.commandName; // commandSent is an array of string arguments
    const commandArgs = interaction.options;
    console.log(commandSent);
    if (commandSent === 'movie-random') {
        var genreInput: string = "";
        if (commandArgs.data.length > 0) {
            // generate a random movie of a random genre / category
            if (typeof (commandArgs.data[0].value) === 'string') {
                genreInput = commandArgs.data[0].value; // reassign to option type
            }
        }
        var movieSuggestion: IMovieData = await getRandomMovie(genreInput);
        if (movieSuggestion === undefined) {
            await interaction.reply('Invalid genre type');
        } else {
            await interaction.reply(`${movieSuggestion.movie_name}`)
        }
    } else if (commandSent === 'movie-trailer') {
        await interaction.reply('Trailer');
    }
})


// log into client passing api token
discordClient.login(discord_token);