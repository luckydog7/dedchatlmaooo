const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.TOKEN);

count = 0;

client.on("message", function(message) {
    if (message.author.bot) return;
    let text = message.content.toLowerCase();
    if (text.includes('dead') && text.includes('chat'))
    {
        count++;
        try
        {
            const guild = message.channel.guild
            const channel = guild.channels.cache.find(channel => channel.id === "880531406185455706")
            channel.setName(`dead chat counter : ${count}`)
        }catch (e) {
            console.log(e)
        }

        //message.reply(`test lol ${count}`);
    }
});