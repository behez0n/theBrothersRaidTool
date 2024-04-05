const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('icc25n')
        .setDescription('Comando para armar ICC25N'),
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
    await interaction.reply({ content: `@everyone Armo ICC25N x LK - Pedir invite por GUILD` });
}
