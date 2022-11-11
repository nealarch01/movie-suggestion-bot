# Discord bot that gives movie suggestions

## Requirements
### 1. Node.js

### 2. API keys from Discord and TheMovieDatabase
- Instructions to request Discord token & setting up an application: https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
- Instructions to request TMDB api key: https://developers.themoviedb.org/3/getting-started/introduction

## Installation:
1. Download or clone the repo ```git clone https://github.com/nealarch01/DiscordMovieBot.git ```
2. Navigate into the Discord bot's directory and type ```npm install``` to install dependency packages.

3. Create a file named <b>```client_config.json```</b> and follow the fields below.
```json
{
    "tmdb_api_key": "your-api-key",
    "discord_token": "your-api-key",
    "discord_client_id": "your-discord-appplication-id",
}
```
4. Finally, start the bot: ```npm start ```

## Additional notes and resources
- Useful Documentation links
    - https://developers.themoviedb.org/3/getting-started/introduction
    - https://discordjs.guide/#before-you-begin
    - https://discord.js.org/#/


## Sample video

https://user-images.githubusercontent.com/73256760/178135791-4e4db6a0-f928-4202-b41c-4c21d765c6cb.mov



## Basic commands
```/movie-random``` returns a random movie of any genre

```/movie-random {genre_name}``` returns a random movie of a specified genre.
- Genre types are: action, adventure, animation, comedy, crime, documentary, drama, family, fantasy, history, horror, music, mystery, romance, sci-fi, thriller, war, western


```/movie-trailer {movie-name}``` returns a movie's YouTube trailer link

## Attributions
- Movie data is obtained from https://www.themoviedb.org