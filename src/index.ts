import { Client, Intents, Interaction } from 'discord.js';
import { discord_token } from '../client_config.json';

// initiate the client
const discordClient = new Client({ intents: [Intents.FLAGS.GUILDS] });

// event listener to start
discordClient.once('ready', () => {
    console.log('The bot is now running');
});


// log into client passing api token
discordClient.login(discord_token);