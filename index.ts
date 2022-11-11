// Discord imports
import { Client, Guild, Intents, Interaction } from "discord.js";
import { discord_token } from "./client_config.json";

// Bot commands import
import { deployCommands } from "./deploy-commands";

// Command handlers
import randomMovieCommand from "./src/commands/random-movie-command";
import movieTrailerCommand from "./src/commands/movie-trailer-command";

// Initiate the client
const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS] });

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
        await movieTrailerCommand(interaction);
    }
});

// GuildCreate event is emitted when the bot joins a new guild (server)
discordClient.on("guildCreate", async (guild: Guild) => {
    await deployCommands(guild.id); 
});

// log into client passing api token
discordClient.login(discord_token);