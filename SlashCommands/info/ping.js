const { Command } = require("reconlx");

module.exports = new Command({
    name: "ping",
    description: "returns websocket ping",
    run: async ({client, interaction}) => {
        await interaction.deferReply();
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
});
