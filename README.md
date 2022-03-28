A discord bot for your server that can provide you with random movie suggestions information of a movie such as ratings, trailer, etc. Best for discord movie night with friends

Please note: this bot is still in development

## Requirements
1. client_config file that contains your api keys. API's used: Discord and TheMovieDatabase (TMDB)
    - Request Discord token: https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
    - Requst a TMDB api key: https://developers.themoviedb.org/3/getting-started/introduction

client_config.json should be located in this cloned directory (not in src) should look something like this:

```json
    {
        "tmdb_api_key": "your-api-key",
        "discord_token": "your-api-key",
        "discord_client_id": "your-discord-appplication-id",
        "personal_guildID": "your-server-id"
    }
```

2. Typescript node (ts-node) needs to be installed. A script in package.json has already been defined so you can go ahead and run the bot
    - To run the bot type: ``` npm start ``` into your termina
    - To register commands into your server type: ``` npm run deploy-commands ```
        - Make sure to update personal guildID with your discord server ID

## Notes: 

- tsconfig.json has already been preconfigured, feel free to make your own changes that fit your needs
- This bot uses discord.js V13
- Documentation links
    - https://developers.themoviedb.org/3/getting-started/introduction
    - https://discordjs.guide/#before-you-begin
    - https://discord.js.org/#/
### Attributions:
- Movie data is obtained from https://www.themoviedb.org
- Each result given by the bot will source themoviedb