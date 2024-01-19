const { Client, Events, GatewayIntentBits, EmbedBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
require('dotenv').config()
const ANSI_RESET = "\u001B[0m";
const ANSI_BLACK = "\u001B[30m";
const ANSI_RED = "\u001B[31m";
const ANSI_GREEN = "\u001B[32m";
const ANSI_LIGHT_YELLOW = "\u001B[93m";
const ANSI_YELLOW = "\u001B[33m";
const ANSI_YELLOW_BACKGROUND = "\u001B[43m";
const ANSI_BLUE = "\u001B[34m";
const ANSI_PURPLE = "\u001B[35m";
const ANSI_CYAN = "\u001B[36m";
const ANSI_WHITE = "\u001B[37m";
const ANSI_BOLD = "\u001B[1m";
const ANSI_UNBOLD = "\u001B[21m";
const ANSI_UNDERLINE = "\u001B[4m";
const ANSI_STOP_UNDERLINE = "\u001B[24m";
const ANSI_BLINK = "\u001B[5m";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    console.log(``);
    console.log(`${ANSI_WHITE}[${ANSI_BLUE}Allright Town${ANSI_WHITE}]${ANSI_GREEN}#########################################`);
    console.log(`${ANSI_WHITE}[${ANSI_BLUE}Allright Town${ANSI_WHITE}] ${ANSI_CYAN}Thank you for purchasing XD STUDIO`);
    console.log(`${ANSI_WHITE}[${ANSI_BLUE}Allright Town${ANSI_WHITE}]         ${ANSI_PURPLE}Allright Town           `);
    console.log(`${ANSI_WHITE}[${ANSI_BLUE}Allright Town${ANSI_WHITE}]${ANSI_GREEN}#########################################`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot || message.channelId != '1110560774272860160' || message.author.id != '703966523647197275') return;

    const ActionRow = new ActionRowBuilder().setComponents([
        new ButtonBuilder()
          .setCustomId("customer_reaction")
          .setLabel(`🍭 รับยศ`)
          .setStyle('Success'),
    ]);
    const RoomMaster = client.channels.cache.get("1110560774272860160")
    RoomMaster.bulkDelete(100)
    
    const Messagex = {
        "content": null,
        "embeds": [
          {
            "title": "ALLRIGHT TOWN - CLOSE BETA",
            "description": "กดเพื่อรับยศ <@&1117439561627340881> ยศนี้จะมีสิทธิพิเศษต่างๆมากมาย เฉพาะผู้เล่นที่มียศนี้เท่านั้น\n\n**Fanpage : [ALLRIGHT TOWN](https://www.facebook.com/AllrightTown)**",
            "color": 529564,
            "footer": {
              "text": "Powered By XD - PROJECT",
              "icon_url": "https://media.discordapp.net/attachments/1113493409253044386/1113493458947145798/LOGO_1.png?ex=65ba6b18&is=65a7f618&hm=4c764a10bfdef9f37348dfbb9535053fb68d93602d63a49875b9309a6c003fca&=&format=webp&quality=lossless&width=676&height=676"
            },
            "timestamp": "2024-01-19T11:57:00.000Z",
            "image": {
              "url": "https://media.discordapp.net/attachments/1197539627381301248/1197539629331664996/AR-POSTER1.png?ex=65bba2b0&is=65a92db0&hm=eb67c48b1204187b8a4b8804113f2a1569d3a1bfc5b21d862713c6a4bee57b87&=&format=webp&quality=lossless&width=1202&height=676"
            },
            "thumbnail": {
              "url": "https://media.discordapp.net/attachments/1113493409253044386/1113493458603216936/LOGO_2.png?ex=65ba6b18&is=65a7f618&hm=13b5587e4bb2ccf882babbdbffbf10a3ceb20666f7c2cc4c769f91795907081d&=&format=webp&quality=lossless&width=676&height=676"
            }
          }
        ],
        components : [ActionRow],
        "username": "ALLRIGHT TOWN",
        "avatar_url": "https://media.discordapp.net/attachments/1113493409253044386/1113493458947145798/LOGO_1.png?ex=65ba6b18&is=65a7f618&hm=4c764a10bfdef9f37348dfbb9535053fb68d93602d63a49875b9309a6c003fca&=&format=webp&quality=lossless&width=676&height=676",
        "attachments": [],
        "flags": 4096
      }
      client.channels.cache.get('1110560774272860160').send(Messagex);

});

client.on(Events.InteractionCreate, async interaction => {
    const message_reply = {
        "content": null,
        "embeds": [
          {
            "title": "ขอบคุณสำหรับการเข้าร่วมเป็นผู้เล่นทดสอบของเรา",
            "description": "**[ALLRIGHT TOWN](https://www.facebook.com/AllrightTown) ยินดีต้อนรับค้าบ**\nพบปัญหากด <#1063622115447803924> ได้เลย",
            "color": 5106515,
            "thumbnail": {
              "url": "https://media.discordapp.net/attachments/1113493409253044386/1113493458947145798/LOGO_1.png?ex=65ba6b18&is=65a7f618&hm=4c764a10bfdef9f37348dfbb9535053fb68d93602d63a49875b9309a6c003fca&=&format=webp&quality=lossless&width=676&height=676"
            }
          }
        ],
        "username": "ALLRIGHT TOWN",
        "avatar_url": "https://media.discordapp.net/attachments/1113493409253044386/1113493458947145798/LOGO_1.png?ex=65ba6b18&is=65a7f618&hm=4c764a10bfdef9f37348dfbb9535053fb68d93602d63a49875b9309a6c003fca&=&format=webp&quality=lossless&width=676&height=676",
        "attachments": [],
        ephemeral : true
    }

    if (interaction.isButton()) {
        if(interaction.customId == 'customer_reaction'){
            const hasRole = interaction.member.roles.cache.some(r => r.name === "OBT WHITELIST")
            if(hasRole){ await interaction.reply({content : 'คุณมียศอยู่แล้ว!!',ephemeral : true}); return};
            message = await interaction.reply(message_reply);
            interaction.member.get
            if(message){
                await interaction.member.roles.add('1117439561627340881');
            }
        }
    }
});

client.login(process.env.BOT_TOKEN);
