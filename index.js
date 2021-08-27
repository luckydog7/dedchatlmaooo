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
            const voiceChannel = message.guild.channels.resolve("880531406185455706");

            if (voiceChannel)
                voiceChannel.setName(`"dead chat" counter : ${count}`);
            else
                console.log("a");

        }catch (e) {
            console.log(e)
        }

        //message.reply(`test lol ${count}`);
    }
});
