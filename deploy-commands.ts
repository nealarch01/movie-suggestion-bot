// This only needs to be ran once
// However, if changes are made, then rerunning this is necessary
// Script has already been defined as: npm run deploy-commands

import { REST } from "@discordjs/rest";
import { Routes } from "discord.js/node_modules/discord-api-types/v9";
import { discord_token, discord_clientID, guild_id } from './client_config.json';
import movieBotCommands from './bot-commands';

// Manual import of commands
// This is not part of the main program

async function deployCommands_Manual() {
    const rest = new REST({ version: '9' }).setToken(discord_token);
    rest.put(Routes.applicationGuildCommands(discord_clientID, guild_id), { body: movieBotCommands })
        .then(() => console.log('Commands successfully registered'))
        .catch((err) => console.log(err, "\nAn error has occured registering commands"));
}

async function deployCommands(guildId: string) {
    const rest = new REST({ version: '9' }).setToken(discord_token);
    rest.put(Routes.applicationGuildCommands(discord_clientID, guildId), { body: movieBotCommands })
        .then(() => {
            console.log('Commands successfully registered');
        })
        .catch((err) => {
            console.log(err, "\nAn error has occured registering commands");
        });
}

export { deployCommands, deployCommands_Manual };
