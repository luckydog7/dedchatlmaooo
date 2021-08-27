const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.TOKEN);


count = process.env.STARTCOUNT == null ? 0 : Number(process.env.STARTCOUNT);

client.on("messageCreate", function(message) {
    if (message.author.bot) return;
    let text = message.content.toLowerCase();
    if (text.includes('dead') && text.includes('chat'))
    {
        count++;
        const voiceChannel = message.guild.channels.resolve("880531406185455706");
        //console.log(voiceChannel)

        if (!voiceChannel) return console.log("sad");

        voiceChannel.setName(`"dead chat" highscore : ${count}`)
            .catch(console.error);

        //message.reply(`test lol ${count}`);

    }
});
