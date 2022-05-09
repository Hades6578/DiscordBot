
//Require the necessary discord.js classes
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const { RP1, RP2 } = require('./LongerResponses.json');
//Create new client instance
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.commands = new Collection();
const cmdfolder = fs.realpathSync('./discordbot/commands');
const commandFiles = fs.readdirSync(cmdfolder).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
const command = require(`./commands/${file}`);
// Set a new item in the Collection
// With the key as the command name and the value as the exported module
client.commands.set(command.data.name, command);
}


//When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
//Command handler
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});




//Replys to messages containing keywords
client.on('message', (message) => {
if(message.author.bot == false){
	if(message.content.includes("ping")){
        message.reply("Pong");
    }
if(message.content.includes("coconut")){
        message.reply("Smell my electronic nuts.");
    }
if(message.content.includes("free robux")){
        message.reply("FREE ROBUX NO VERIFICATION 100% REAL 2022 AMONGUS SUSSY IMPOSTER SQUID GAME");
    }
if(message.content =="bot"){
        message.reply("HeLlO, iT's Me,YoUr FaVoRiTe DiScOrD bOt!!!");
    }
if(message.content =="bad bot"){
        message.reply("Didn't ask, don't care. Go complain to the manager Karen.");
    }
if(message.content == 'F'){
        message.reply("noscoped + your mom + cope + ratio + skill issue + didn't ask + get rekt + rickroll + demonitized.");
    }
if(message.content.includes("i forgor")){
        message.reply("Senior moment, lol");
    }
if(message.content.includes("Fail")){
        message.reply("Epic Embedded Fail. Laugh at this user.");
    }
if(message.content =="Next time eat a salad"){
        message.reply(RP1);
	message.reply(RP2);
    }
  }
});



//Login to Discord with Client's token
client.login(token);