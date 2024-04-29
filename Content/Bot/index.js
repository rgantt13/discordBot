// JavaScript source code
//import botconfig from "../../../BotConfig/botconfig.json" assert { type: "json" }
const botconfig = require("../../../BotConfig/botconfig.json");
const Discord = require("discord.js");
//import {Client, Collection, GatewayIntentBits } from "discord.js"

const bot = new Discord.Client({intents : [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.GuildMessages]});
//const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () => {
	bot.user.setUsername("NewBot");
	console.log(`${bot.user.username} is online!`);
	
	//bot.user.setActivity("Fuck you~! :)");
});

bot.on(Discord.Events.MessageCreate, message => {
	console.log(message);

	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);


	if(message.content == "hello"){
		console.log("yo")
		message.reply("bitch.");
	}

	if(cmd === `${prefix}hello`){
		return message.channel.send("Hello");
	}

	if(cmd === `${prefix}progress`){
		return message.channel.send("So far I have set up the ability to say 'Hello!'");
	}

})


bot.on("message", message => {
	console.log(message);

	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);


	if(message.content == "hello"){
		message.reply("bitch.");
	}

	if(cmd === `${prefix}hello`){
		return message.channel.send("Hello");
	}

	if(cmd === `${prefix}progress`){
		return message.channel.send("So far I have set up the ability to say 'Hello!'");
	}

});


bot.login(botconfig.token);
