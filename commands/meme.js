const fetch = require("node-fetch")
module.exports = async function(msg,args) {
    try{

word = args.join(" ")
const url = `https://meme-api.herokuapp.com/gimme/${word}`
response = await fetch(url);
json = await response.json();
if (json.code == '404'){
    msg.channel.send(json.message)
}
else{
msg.reply('Here\'s a meme from /r/'+json.subreddit)
msg.channel.send(json.url)} 
}catch(err){
console.error(err)
msg.react("❌")

}}
