const wallpaper = require("wallpaper");
const snoowrap = require("snoowrap");
const axios = require("axios");
const fs = require("fs");

require('dotenv').config();
/* 
- Create a new Reddit App : https://www.reddit.com/prefs/apps 
- Create a .env file that looks like this:
    CLIENT_ID=***
    CLIENT_SECRET=***
    REDDIT_USER=***
    REDDIT_PASS=***
*/

/* How many wallpapers do you want to loop through? (The more = the more random your wallpaper'll be)*/
const LENGTH = 100;

/* Where do you want to save the wallpapers? (By default ~/Pictures/Wallpapers) */
const PATH = require('os').homedir() + "\\Pictures\\Wallpapers\\";

const r = new snoowrap({
    userAgent: 'RedditWallpaper by @aureleoules',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

r.getSubreddit('WQHD_Wallpaper').getHot({limit: LENGTH}).then(submissions => {
    let validUrl = false;
    while(validUrl === false) {
        const wallpaper = getRandomWallpaper(submissions);
        if(wallpaper.url.endsWith(".jpg") || wallpaper.url.endsWith(".png")) {
            validUrl = true;
            axios({
                method: 'get',
                url: wallpaper.url,
                responseType: 'stream'
            }).then(function(response) {
                const fullPath = PATH + wallpaper.name + ".jpg";
                const stream = fs.createWriteStream(fullPath);
                stream.on("close", () => setWallpaper(fullPath));
                response.data.pipe(stream);
            });
        }
    }    
});

function getRandomWallpaper(wallpapers) {
    const random = Math.floor(Math.random() * LENGTH);
    return wallpapers[random];
}

function setWallpaper(path) {
    console.log(path);
    wallpaper.set(path).then(() => {
        console.log("Successfuly downloaded wallpaper!")
    });
}