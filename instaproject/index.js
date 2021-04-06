require('dotenv').config(); 
//we need this for protecting your passwords and usernames
const insta = require('instagram-web-api'); 

const client = new insta({ username: 'umbels_bot', password: process.env.TOKEN }); 
//you need to put your username and passowrd in a .env file. your usernmae HAS you be your username not email or phone number. 
client.login().then(async () => {
    function intervalFunc(){
    const got = require('got'); 
    got('https://www.reddit.com/r/memes/random/.json').then(async (response) => {
//this gets the memes from reddit
        let content = JSON.parse(response.body); 
        let jsonData = content[0].data.children[0]; 
        let creditToURL = `https://reddit.com${jsonData.data.permalink}`; 
        let creditToAuthor = jsonData.data.author; 
        let memeImage = jsonData.data.url; 
        let memeTitle = jsonData.data.title;

        if(!memeImage.endsWith('.jpg' || '.jpeg')) intervalFunc(); else {
        
    await client.login(); 
    if(client.login) console.log('bot logged in successfully!'); 
    if(!client.login) console.log('bot had a problem loggin in :('); 

        const moment = require('moment'); 
        client.uploadPhoto({ photo: memeImage, 
            caption: `"${memeTitle}" 
            this is a bot that takes random posts form r/memes and adds them to here. 
            I take *NO CREDIT* for any of these memes. *ALL* of the credit for this meme go u/${creditToAuthor}, 
            however, I do take credit for making this bot. If you have questions about the bot, the best way to get ahold of me is my reddit account: https://www.reddit.com/user/umbel__
            wear a mask, stay inside, stay safe!`, post: 'feed' });  
            const time = moment().format('MMMM Do YYYY, h:mm:ss a'); 
            console.log(`meme uploaded at ${time}`); 
            //posts said memes to it's insta feed
            x = 60000; 
            //"x" is equal to 60000 milleseconds. AKA 1 minute. 
            //this makes life so much easier, because now all we have to do is multiply x by a number, 
            //and that number will be how many minutes we want!

            setTimeout(intervalFunc, x*10); //example, this is a 15 minute interval! 
            }
        }
    )}
    intervalFunc(); 
    //starts the function! and if there's an error, it will keep trying the function untill it works!
})

//things to do for this bot: 
//make it so you cant get 2 of the same memes, i have a hlafproof method right now, but it might not be perfect
//make it so if the aspect ratio is not usable, it will find a new meme. 
//host it 24/7, probably with heroku, but AWS is also a good method. 
