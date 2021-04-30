const ping = require("./commands/info/ping")
const select = require("./commands/fun/select")
const gif = require("./commands/fun/gif")
const meme = require("./commands/fun/meme")
const say = require("./commands/fun/say")
const joke = require("./commands/fun/joke")
const avatar = require("./commands/fun/avatar")
const roaster = require("./commands/fun/roaster")
const quote  = require("./commands/fun/quote")
const help = require("./commands/info/help")
const invite = require("./commands/fun/invite")
const weather = require("./commands/fun/weather")
const about = require("./commands/info/about")
const fact = require("./commands/fun/fact")
const lookfor = require("./commands/fun/lookfor")
const rps = require("./commands/fun/rps")
const motivate = require("./commands/fun/motivate")
const vote = require("./commands/info/vote")
const q = require("./commands/fun/q")
const like = require("./commands/fun/like")
const commands = {
 ping,select,gif,meme,say,joke,avatar,roaster,quote,help,invite,weather,about,fact,lookfor,rps,motivate,vote,q,like
}
module.exports = async function (msg) {
   try{
    let args = msg.content.split(" ")
    let command = args.shift()
    if (command.charAt(0)=="*" && command.indexOf("*") == command.lastIndexOf("*")  && msg.channel.permissionsFor(msg.guild.me).has("SEND_MESSAGES") && msg.channel.permissionsFor(msg.guild.me).has("ADD_REACTIONS")&&msg.channel.permissionsFor(msg.guild.me).has("VIEW_CHANNEL")){
        command = command.substring(1).toLowerCase()
        commands[command](msg,args)
        console.log(`${msg.author.username} used ${command} in ${msg.guild.name}`)

}
}catch(err){}
}
