const { Command } = require("reconlx");

module.exports = new Command({
    name: 'hi',
    description: 'hello world',
    userPermissions: ['ADMINISTRATOR'],
    run: async({ interaction }) => {
        interaction.followUp({content: "hello world!"});
    }
});