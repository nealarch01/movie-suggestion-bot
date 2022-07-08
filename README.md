# Discord bot that gives movie suggestions

## Requirements
### 1. Node.js

### 2. API keys from Discord and TheMovieDatabase
- Instructions to request Discord token & setting up an application: https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
- Instructions to request TMDB api key: https://developers.themoviedb.org/3/getting-started/introduction

## Installation:
1. Download or clone the repo ```git clone https://github.com/nealarch01/DiscordMovieBot.git ```
2. Navigate into the Discord bot's directory and type ```npm install``` to install dependency packages.
<b>Note: this command will not install ts-node!!</b>
    - If ts-node has not been installed before, use ```npm install ts-node```
3. Configure your ```client_config.json``` by assigning your API keys and IDs. 

<b>```client_config.json```</b>
```json
{
    "tmdb_api_key": "your-api-key",
    "discord_token": "your-api-key",
    "discord_client_id": "your-discord-appplication-id",
    "guild_id": "your-server-id"
}
```
4. Register the bot's commands to your discord server
    - Copy the Discord server ID and set that as the value for ```guild_id``` in ```client.config_json```
    - Then, run ```npm run deploy-commands```
5. Finally, start the bot: ```npm start ```

## Additional notes and resources

- Bot uses discord.js V13
- Documentation links
    - https://developers.themoviedb.org/3/getting-started/introduction
    - https://discordjs.guide/#before-you-begin
    - https://discord.js.org/#/

## Attributions
- Movie data is obtained from https://www.themoviedb.org

## Sample video
https://user-images.githubusercontent.com/73256760/163731966-68b4b0a1-d841-424a-9bc1-8380d8aac655.mov




## Basic commands
```/movie-random``` returns a random movie of any genre

```/movie-random {genre_name}``` returns a random movie of a specified genre.
- Genre types are: action, adventure, animation, comedy, crime, documentary, drama, family, fantasy, history, horror, music, mystery, romance, sci-fi, thriller, war, western


```/movie-trailer {movie-name}``` returns a movie's YouTube trailer link

