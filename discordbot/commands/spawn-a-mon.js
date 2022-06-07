const { SlashCommandBuilder } = require('@discordjs/builders');
const delay = async (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spawn-a-mon')
		.setDescription('Spams 50 messages to spawn a Pokemon.'),
	async execute(interaction) {
		const channel = await interaction.client.channels.fetch('979433233303371886');
			for (let i = 1; i < 51; i++) {
				spam = "Spam for a Pokemon #" + i;
				channel.send(spam);
				await delay(5000);
			}
		channel.send("Finished Spamming, please wait a bit before repeating.");
	},
};
