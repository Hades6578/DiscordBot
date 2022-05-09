const { SlashCommandBuilder } = require('@discordjs/builders');
//We need EmbedService for proper interaction
const { MessageEmbed } = require('discord.js');

const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Trolled, LOL')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/jWr67J8.png', url: 'https://discord.js.org' })
	.setDescription("You've been trolled.")
	.setThumbnail('https://i.imgur.com/jWr67J8.png')
	.addField('Whatever', 'Not original', true)
	.setImage('https://i.imgur.com/jWr67J8.png')
	.setTimestamp()
	.setFooter({ text: "Please don't hurt me.", iconURL: 'https://i.imgur.com/jWr67J8.png' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed-test')
		.setDescription('Test command for embed elements.'),
	async execute(interaction) {
		return interaction.reply({embeds: [exampleEmbed] });
	},
};