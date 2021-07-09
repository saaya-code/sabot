const ytdl = require('ytdl-core-discord');


async function newCommand(msg,args){
let userVoiceChannelID = msg.member.voice.channelID
if(!userVoiceChannelID){
    return console.log(userVoiceChannelID)
}
 
let clientVoiceConnection = msg.guild.voiceConnection;
if(clientVoiceConnection){
    return msg.channel.send("I'm already in voice channel");
}

const streamOptions = { seek: 5000, volume: 1, type:'opus'};
var voiceChannel = msg.guild.channels.cache.get(userVoiceChannelID);
        voiceChannel.join().then(async connection => {
            console.log("joined channel");
            const stream = await ytdl('https://www.youtube.com/watch?v=Tn20D1X6XHA', { filter : 'audioonly' });
            const dispatcher = connection.play(stream, streamOptions);
            dispatcher.on("end", end => {
                console.log("left channel");
                voiceChannel.leave();
            });
            
        }).catch(err => console.log(err));
}



module.exports = newCommand;