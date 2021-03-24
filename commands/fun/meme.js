const fetch = require("node-fetch")
module.exports = async function(msg,args) {
    try{

word = args.join(" ")
const url = `https://meme-api.herokuapp.com/gimme/${word}`
response = await fetch(url);
json = await response.json();
if (json.code == '404' || json.subreddit==undefined){
    msg.channel.send(json.message)
}
else if(json.nsfw==true){
    msg.channel.send(`The meme you requested from ${json.subreddit} contains nsfw content.`).then(async (msg1)=>{
        setTimeout(()=>{
            msg1.delete();
        },5000)
    }).catch((err)=>{
        console.error(err)    
    })
    return false;
}
else{
msg.reply('Here\'s a meme from /r/'+json.subreddit)
msg.channel.send(json.url)} 
}catch(err){
console.error(err)
msg.react("❌")

}}
