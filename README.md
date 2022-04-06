A discord bot for your server that can provide you with random movie suggestions, information of a movie such as ratings, trailer, etc. Best for discord movie night with friends!

Please note: this bot is still in development, more features will be added over time

## Requirements
1. client_config file that contains your api keys. APIs used: Discord and TheMovieDatabase (TMDB)
    - Request Discord token: https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
    - Requst a TMDB api key: https://developers.themoviedb.org/3/getting-started/introduction

client_config.json should be located in the directory of package.json (not in src). My client_config.json looks something like this:

```json
    {
        "tmdb_api_key": "your-api-key",
        "discord_token": "your-api-key",
        "discord_client_id": "your-discord-appplication-id",
        "personal_guildID": "your-server-id"
    }
```

2. Node.js

3. TypeScript node (ts-node)

## Installation:
1. Navigate to a directory where you want to install your bot
2. Type ``` git clone https://github.com/nealarch01/DiscordMovieBot.git ```
3. Followed by: ``` npm install``` to install dependency packages
4. Install ts-node (you can skip this step if you already have it installed) ``` npm install ts-node ```
5. Configure your client_config.json file and assign your own api keys
6. Register the bot's commands to your discord server (optional)
    - set personal_guildID's value in client.config_json to the discord server ID the bot is being added to
    - type ```npm run deploy-commands```
7. Finally start the bot ``` npm start ```

## Additional notes: 

- tsconfig.json has already been configured but feel free to make your own changes!
- This bot uses discord.js V13
- Documentation links
    - https://developers.themoviedb.org/3/getting-started/introduction
    - https://discordjs.guide/#before-you-begin
    - https://discord.js.org/#/
### Attributions:
- Movie data is obtained from https://www.themoviedb.org
- Each result given by the bot will source themoviedb