// Discord imports
import { Client, Intents, Interaction } from "discord.js";
import { discord_token } from "../client_config.json";

// Command handlers
import randomMovieCommand from "./commands/random-movie-command";
import movieTrailerCommand from "./commands/movie-trailer-command";

// initiate the client
const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS] });

// event listener to start
discordClient.once("ready", () => {
    console.log("The bot is now running");
});

discordClient.on("interactionCreate", async (interaction: Interaction) => {
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
    if (commandSent === "movie-random") {
        await randomMovieCommand(interaction);
    } else if (commandSent === "movie-trailer") {
        movieTrailerCommand(interaction);
    }
});

// log into client passing api token
discordClient.login(discord_token);