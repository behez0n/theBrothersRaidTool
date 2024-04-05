const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('icc10h')
        .setDescription('Comando para armar ICC10H'),
    async execute(interaction) {
        try {
            const roles = interaction.member.roles.cache;

            if (roles.has('1156051917319974982')) {
                await handleLogin(interaction);
            } else {
                await interaction.reply({ content: "Que miras bobo? Anda paya bobo!" });
            }
        } catch (error) {
            console.error('Error:', error);
            await interaction.reply({ content: 'Hubo un error al procesar el comando.' });
        }
    }
};

async function handleLogin(interaction) {
    await interaction.reply({ content: `@everyone Armo ICC10H x ABAS - Pedir invite por GUILD` });
}
