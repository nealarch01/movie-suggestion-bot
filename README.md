A discord bot for your server that can provide you with random movie suggestions information of a movie such as ratings, trailer, etc. Best for discord movie night with friends

Please note: this is still in development

## Requirements
1. client_config file that contains your api keys. API's used: Discord and TheMovieDatabase (TMDB)
    - Request Discord token: https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
    - Requst a TMDB api key: https://developers.themoviedb.org/3/getting-started/introduction

client_config.json should look something like this:

```json
    {
        "tmdb_api_key": "",
        "discord_token": "",
        "discord_client_id": "",
        "personal_development_guildID": "",
        "server_development_id": "",
    }
```

2. Typescript node (ts-node) needs to be installed. A script in package.json has already been defined so you can go ahead and run the bot
- To run the bot type: ``` npm start ``` into your terminal (make sure you are in the main directory and not in "./src" or any other directory)

Notes: 
- tsconfig.json has already been preconfigured, feel free to make your own changes that fit your need
- This bot uses discord.js V13
- Documentation links
    - https://developers.themoviedb.org/3/getting-started/introduction
    - https://discordjs.guide/#before-you-begin
    - https://discord.js.org/#/