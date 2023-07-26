import { Client, Routes, REST, GatewayIntentBits, EmbedBuilder, WebhookClient, ActivityType } from 'discord.js';
import http from 'http';
import axios from 'axios';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

import commandLogger from './log.js';

const commands = [
    {
        name: 'aww',
        description: 'Drop Some Cuteness On This Channel..!!',
        dm_permission: false
    },
    {
        name: 'help',
        description: 'Get Help',
        dm_permission: false
    },
    {
        name: 'invite',
        description: 'Get Invite Links',
        dm_permission: false
    },
    {
        name: 'ping',
        description: 'Check Websocket Heartbeat && Roundtrip Latency',
        dm_permission: false
    },
];

async function initDiscordCommands() {

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

    try {

        console.log('Started refreshing application commands (/)');

        await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: commands })
            .then(() => { console.log('Successfully reloaded application commands (/)') })
            .catch(e => console.log(chalk.red(e)));

        console.log('Connecting to Discord Gateway...');

    } catch (error) {

        console.log(chalk.red(error));

    }
}

async function main() {

    await initDiscordCommands().catch(e => { console.log(e) });

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildIntegrations,
            GatewayIntentBits.DirectMessages
        ]
    });


    client.login(process.env.DISCORD_BOT_TOKEN).catch(e => console.log(chalk.red(e)));


    client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag}`);
        console.log(chalk.greenBright('Connected to Discord Gateway'));
        console.log(new Date());

        client.user.setStatus('online');
        client.user.setActivity("/aww & /help", { type: ActivityType.Playing });
    });


    client.on("interactionCreate", async interaction => {

        if (!interaction.isChatInputCommand()) return;

        switch (interaction.commandName) {
            case "aww":
                aww_Interaction_Handler(interaction);
                break;
            case "ping":
                ping_Interaction_Handler(interaction);
                break;
            case "help":
                help_Interaction_Handler(interaction);
                break;
            case 'invite':
                invite_Interaction_Handler(interaction);
                break;
            default:
                await interaction.reply({ content: 'Command Not Found' });
        }
    });


    async function ping_Interaction_Handler(interaction) {
        const userName = interaction.user.tag;
        const userAvatar = interaction.user.displayAvatarURL();

        const websocketHeartbeat = interaction.client.ws.ping;

        const pingingEmbed = new EmbedBuilder()
            .setAuthor({
                name: "aww",
                url: "https://awwbot.pages.dev",
                iconURL: "https://awwbot.pages.dev/img/aww-logo.png",
            })
            .setTitle("🌐 Pinging Discord API v10")
            .setColor("#f500e0");

        const sent = await interaction.reply({ embeds: [pingingEmbed], fetchReply: true });

        const pingedEmbed = new EmbedBuilder()
            .setAuthor({
                name: "aww",
                url: "https://awwbot.pages.dev",
                iconURL: "https://awwbot.pages.dev/img/aww-logo.png",
            })
            .setTitle("Ping Results:")
            .addFields(
                {
                    name: "Websocket Heartbeat",
                    value: `\`${websocketHeartbeat} ms\``,
                    inline: true
                },
                {
                    name: "Roundtrip Latency",
                    value: `\`${sent.createdTimestamp - interaction.createdTimestamp} ms\``,
                    inline: true
                },
            )
            .setColor("#f500e0")
            .setFooter({
                text: `Requested By ${userName}`,
                iconURL: `${userAvatar}`,
            })
            .setTimestamp();

        await interaction.editReply({ embeds: [pingedEmbed] });

        await commandLogger(interaction, "ping");
    }


    async function help_Interaction_Handler(interaction) {
        const userName = interaction.user.tag;
        const userAvatar = interaction.user.displayAvatarURL();

        const helpEmbed = new EmbedBuilder()
            .setAuthor({
                name: "aww",
                url: "https://awwbot.pages.dev",
                iconURL: "https://awwbot.pages.dev/img/aww-logo.png",
            })
            .setTitle("help")
            .setDescription("<@1058062325300592751> bot brings the cuteness of *r/aww*  subreddit straight to Discord Servers.\n\n**__Commands__:**\n</help:1105384684973735946> - Get Help.\n</invite:1058067916303642796> - Get Invite Links.\n</aww:1061737429649866893> - Drop Some Cuteness On This Channel.\n</ping:1105384684973735947> - Check Websocket Heartbeat && Roundtrip Latency.\n\n**__Useful Links__:**\n[Invite Bot](https://awwbot.pages.dev/invite)  |  [Support Server](https://awwbot.pages.dev/support)  |  [Status Page](https://stats.uptimerobot.com/V9wWVi2B0g) \n[Terms of Service](https://awwbot.pages.dev/terms-of-service)   |   [Privacy Policy](https://awwbot.pages.dev/privacy-policy)")
            .setColor("#f500e0")
            .setFooter({
                text: `Requested By ${userName}`,
                iconURL: `${userAvatar}`,
            })
            .setTimestamp();

        await interaction.reply({ embeds: [helpEmbed] });

        await commandLogger(interaction, "help");
    }


    async function invite_Interaction_Handler(interaction) {
        const userName = interaction.user.tag;
        const userAvatar = interaction.user.displayAvatarURL();

        const inviteEmbed = new EmbedBuilder()
            .setAuthor({
                name: "aww",
                url: "https://awwbot.pages.dev",
                iconURL: "https://awwbot.pages.dev/img/aww-logo.png",
            })
            .setTitle("invite")
            .setDescription("Invite Bot: <https://awwbot.pages.dev/invite>\nSupport Server: <https://awwbot.pages.dev/support>")
            .setColor("#f500e0")
            .setFooter({
                text: `Requested By ${userName}`,
                iconURL: `${userAvatar}`,
            })
            .setTimestamp();

        await interaction.reply({ embeds: [inviteEmbed] });

        await commandLogger(interaction, "invite");
    }


    async function aww_Interaction_Handler(interaction) {
        const userName = interaction.user.tag;
        const userAvatar = interaction.user.displayAvatarURL();

        await interaction.reply({ content: `Fetching..🐈` });

        const url = await getCuteUrl();

        const awwEmbed = new EmbedBuilder()
            .setAuthor({
                name: "aww",
                url: "https://awwbot.pages.dev",
                iconURL: "https://awwbot.pages.dev/img/aww-logo.png",
            })
            .setTitle("aww")
            .setDescription(`**URL**: <${url}>`)
            .setImage(`${url}`)
            .setColor("#f500e0")
            .setFooter({
                text: `Requested By ${userName}`,
                iconURL: `${userAvatar}`,
            })
            .setTimestamp();

        if (url.includes(".png") || url.includes(".jpg") || url.includes(".jpeg") || url.includes(".gif") || url.includes(".gifv")) {
            await interaction.editReply({ content: ` `, embeds: [awwEmbed] });
        } else {
            await interaction.editReply({ content: `${url}` });
        }

        await commandLogger(interaction, "aww");
    }

    async function getCuteUrl() {
        const response = await fetch('https://www.reddit.com/r/aww/hot.json');

        const data = await response.json();

        const posts = data.data.children.map((post) => {
            if (post.is_gallery) {
                return '';
            }
            return (
                post.data?.media?.reddit_video?.fallback_url ||
                post.data?.secure_media?.reddit_video?.fallback_url ||
                post.data?.url
            );
        }).filter((post) => !!post);

        const randomIndex = Math.floor(Math.random() * posts.length);

        const randomPost = posts[randomIndex];

        return randomPost;
    }
}


if (process.env.HTTP_SERVER == 'true') {
    http.createServer((req, res) => res.end('BOT is Up && Running..!!')).listen(process.env.PORT);
}

setInterval(() => {
    axios
        .get('https://discord.com/api/v10')
        .catch(error => {
            if (error.response.status == 429) {
                console.log("Discord Rate Limited");
                console.warn("Status: " + error.response.status);
                console.warn(error);
            }
        });

}, 30000);

main();
