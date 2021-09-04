const toDO = {};
const bigArray = new Map();
const Discord = require('discord.js');
toDO.default = async function (msg) {
    msg.reply("Please use a correct specifier.");
}
toDO.add = async function (msg, args) {
    if (!bigArray.has(msg.author.id)){
        userArray = [];
        args.shift()
        userArray.push(args.join(" "))
        bigArray.set(msg.author.id,userArray)
    }
    else{
        userArray = bigArray.get(msg.author.id)
        args.shift()
        userArray.push(args.join(" "))
        bigArray.set(msg.author.id,userArray)
    }
msg.reply(`Succesfully added ${args.join(" ")} to your toDo list.`)
}
toDO.show = async function (msg, args) {
    if (!bigArray.has(msg.author.id) || bigArray.get(msg.author.id).length == 0){
        msg.reply("You currently have nothing in your toDo list use `*todo add` to add a new task.")
    }
    else{
        userArray = bigArray.get(msg.author.id)
        const embed = new Discord.MessageEmbed()
        .setTitle(`${msg.author.username}'s ToDo list.`)
        .setColor(msg.member.displayHexColor)
        for(i=0;i<userArray.length;i++){
            embed.addField(`Task N° ${i+1} :`,userArray[i]);
        }
        msg.channel.send(embed);
    }

}
toDO.finished = async function (msg, args) {
    args.shift();
    if(isNaN(args[0]) || args[0]<1){
        msg.reply("Invalid index.");
        return false;
    }
    if (!bigArray.has(msg.author.id) || bigArray.get(msg.author.id).length == 0){
        msg.reply("You currently have nothing in your toDo list use `*todo add` to add a new task.")
    }
    else{
        userArray = bigArray.get(msg.author.id)
        userArray[args[0]-1] = "~~"+userArray[args[0]-1]+"~~"
        bigArray.set(msg.author.id,userArray)
        msg.reply("ToDo list updated succesfully!")
    }
    
}
toDO.clear = async function (msg, args) {
    if (!bigArray.has(msg.author.id) || bigArray.get(msg.author.id).length == 0){
        msg.reply("You currently have nothing in your toDo list use `*todo add` to add a new task.")
    }
    else{
        bigArray.set(msg.author.id,[]);
        msg.reply("Succesfully deleted toDo list, add a new task to start a new list.")
    }
}
module.exports = async function (msg, args) {
    let action = args[0]
    try{
        toDO[action](msg, args);
    }catch(err){
         toDO.default(msg);
        console.log(action)
        console.log(args)
    }
}