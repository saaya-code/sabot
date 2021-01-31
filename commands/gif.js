const fetch = require("node-fetch")

module.exports = async function (msg,args) {
    try{
let word = 'Random'
    if (args.length>0){
        word = args.join(" ")
    } 
    let link =  `https://api.tenor.com/v1/search?q=${word}&key=${process.env.TENOR}&contentfilter=high`
    respone = await fetch(link)
    let file = await respone.json()
    random = Math.floor(Math.random()*file.results.length)
    msg.reply(`Here's a gif of ${word} as you requested 😉`);
    msg.channel.send(file.results[random].url)
    console.log('!gif in '+msg.channel.name)
    console.log(file.results[random].url)
} 
catch(err){
    console.error(err)
    msg.react("❌")
}
}