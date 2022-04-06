import { Client, Intents, Interaction } from 'discord.js';
import { discord_token } from '../client_config.json';

// interface imports
import IMovieData from './interfaces/IMovieData'; // interface for generic movie data {success, movie_id, movie_name}

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
    /* Order of commands currently
        1. movie-random genre?: string
        2. movie-trailer name: string
    */
    if (commandSent === 'movie-random') {
        var genreInput: string = "";
        if (commandArgs.data.length > 0) {
            // generate a random movie of a random genre / category
            if (typeof (commandArgs.data[0].value) === 'string') {
                genreInput = commandArgs.data[0].value; // reassign to option type
            }
        }
        var suggsetedMovie: IMovieData = await getRandomMovie(genreInput);
        if (suggsetedMovie.success === true) { // if a movie was successfully returned
            await interaction.reply(`${formatMovieData(suggsetedMovie)}`);
        } else { // if success failed or returned
            await interaction.reply('There was an error getting movie');
        } // end of movie-random

    } else if (commandSent === 'movie-trailer') { 
        await interaction.reply('Feature currently not enabled');
    }
});


// formats movie data into a discord message
// this functiona should only be called if success was true
function formatMovieData(movieData: IMovieData): string {
    return `
${attributeSource_tmdb("")}
**${movieData.movie_name}**
**Released**: ${movieData.movie_release_date}
**Description**: ${movieData.movie_description}
**${movieData.movie_user_ratings}%** liked this movie (tmdb)
${(movieData.poster_URL === null) ? "No poster to display" : `[poster](https://image.tmdb.org/t/p/w1280${movieData.poster_URL})`}
`;
}


// Call this function when using data obtained from tmdb
function attributeSource_tmdb(message: string): string {
    return `${message}Data obtained from themoviedb.org`;
}

// log into client passing api token
discordClient.login(discord_token);