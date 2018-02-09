# Reddit Wallpaper
Downloads and set your wallpaper as one random reddit post of a subreddit you choose.  

## Usage
* Create a new Reddit App [here](https://www.reddit.com/prefs/apps)  
* Create a .env file that looks like this:  
    ```
    CLIENT_ID=***
    CLIENT_SECRET=***
    REDDIT_USER=***
    REDDIT_PASS=***
    ```
* Run using `node index.js`  
* _Optionnaly_: You can change 3 **constants**:  
    * **LENGTH**: Number of submissions to fetch
    * **PATH**: Where to save wallpapers
    * **SUBREDDIT**: Which subreddit used to fetch wallpapers 

## Librairies used
[Axios](https://github.com/axios/axios)  
[Dotenv](https://github.com/motdotla/dotenv)  
[Snoowrap](https://github.com/not-an-aardvark/snoowrap)  
[Wallpaper](https://github.com/sindresorhus/wallpaper)  

# Author
[Aurèle Oulès](http://aurele.oules.com)