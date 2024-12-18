import { EmbedBuilder, WebhookClient } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

async function commandLogger(interaction, cmdName) {
    console.log("------------Command Run-----------");
    console.log("Command Name       : /" + cmdName);
    console.log("---------------User---------------");
    console.log("Date & Time        : " + new Date());
    console.log("ID                 : " + interaction.user.id);
    console.log("Tag                : " + interaction.user.tag);
    console.log("Nick-Name          : " + interaction.member.nickname);
    console.log("Avatar URL         : " + interaction.user.displayAvatarURL());
    console.log("----------------Guild---------------");
    console.log("ID                 : " + interaction.member.guild.id);
    console.log("Name               : " + interaction.member.guild.name);
    console.log("Description        : " + interaction.member.guild.description);
    console.log("Member Count       : " + interaction.member.guild.memberCount);
    console.log("Large              : " + interaction.member.guild.large);
    console.log("Owner ID           : " + interaction.member.guild.ownerId);
    console.log(
        "Localion           : " + interaction.member.guild.preferredLocale
    );
    console.log("Shard ID           : " + interaction.member.guild.shardId);
    console.log(
        "Joined Timestamp   : " + interaction.member.guild.joinedTimestamp
    );
    console.log(
        "Content Filter     : " + interaction.member.guild.explicitContentFilter
    );
    console.log(
        "Verification Level : " + interaction.member.guild.verificationLevel
    );
    console.log(
        "Notification Level : " +
            interaction.member.guild.defaultMessageNotifications
    );
    console.log(
        "Vanity URL Code    : " + interaction.member.guild.vanityURLCode
    );
    console.log("MFA Level          : " + interaction.member.guild.mfaLevel);
    console.log("NSFW Level         : " + interaction.member.guild.nsfwLevel);
    console.log(
        "Premium Subs Count : " +
            interaction.member.guild.premiumSubscriptionCount
    );
    console.log("Premium Tier       : " + interaction.member.guild.premiumTier);
    console.log("Features           : " + interaction.member.guild.features);
    console.log("-----------------End----------------");

    const webhookClient = new WebhookClient({
        id: process.env.WEBHOOK_ID,
        token: process.env.WEBHOOK_TOKEN,
    });

    const isFieldInline = true;

    const commandLogEmbed = new EmbedBuilder()
        .setAuthor({
            name: "aww log",
            iconURL: "https://awwbot.pages.dev/log-log-circle.png",
        })
        .setTitle("**__Command Logs__**")
        .setDescription(`**Server Time:**\n*${new Date()}*\n\n**__Info:__**`)
        .addFields(
            {
                name: "Command Name",
                value: `/${cmdName}`,
                inline: isFieldInline,
            },
            {
                name: "User ID",
                value: `${interaction.user.id}`,
                inline: isFieldInline,
            },
            {
                name: "User Tag",
                value: `${interaction.user.tag}`,
                inline: isFieldInline,
            },
            {
                name: "Nick Name",
                value: `${interaction.member.nickname}`,
                inline: isFieldInline,
            },
            {
                name: "Guild ID",
                value: `${interaction.member.guild.id}`,
                inline: isFieldInline,
            },
            {
                name: "Guild Name",
                value: `${interaction.member.guild.name}`,
                inline: isFieldInline,
            },
            {
                name: "Guild Description",
                value: `${interaction.member.guild.description}`,
                inline: isFieldInline,
            },
            {
                name: "Member Count",
                value: `${interaction.member.guild.memberCount}`,
                inline: isFieldInline,
            },
            {
                name: "Is Large",
                value: `${interaction.member.guild.large}`,
                inline: isFieldInline,
            },
            {
                name: "Owner ID",
                value: `${interaction.member.guild.ownerId}`,
                inline: isFieldInline,
            },
            {
                name: "Location",
                value: `${interaction.member.guild.preferredLocale}`,
                inline: isFieldInline,
            },
            {
                name: "Shard ID",
                value: `${interaction.member.guild.shardId}`,
                inline: isFieldInline,
            },
            {
                name: "Bot Join Time",
                value: `${interaction.member.guild.joinedTimestamp}`,
                inline: isFieldInline,
            },
            {
                name: "Content Filter",
                value: `${interaction.member.guild.explicitContentFilter}`,
                inline: isFieldInline,
            },
            {
                name: "Verification Level",
                value: `${interaction.member.guild.verificationLevel}`,
                inline: isFieldInline,
            },
            {
                name: "Notification Level",
                value: `${interaction.member.guild.defaultMessageNotifications}`,
                inline: isFieldInline,
            },
            {
                name: "Vanity URL Code",
                value: `${interaction.member.guild.vanityURLCode}`,
                inline: isFieldInline,
            },
            {
                name: "MFA Level",
                value: `${interaction.member.guild.mfaLevel}`,
                inline: isFieldInline,
            },
            {
                name: "NSFW Level",
                value: `${interaction.member.guild.nsfwLevel}`,
                inline: isFieldInline,
            },
            {
                name: "Premium Subs Count",
                value: `${interaction.member.guild.premiumSubscriptionCount}`,
                inline: isFieldInline,
            },
            {
                name: "Premium Tier",
                value: `${interaction.member.guild.premiumTier}`,
                inline: isFieldInline,
            },
            {
                name: "Features",
                value: `${interaction.member.guild.features}`,
                inline: isFieldInline,
            }
        )
        .setThumbnail(`${interaction.user.displayAvatarURL()}`)
        .setColor("#00b0f4")
        .setFooter({
            text: "aww",
            iconURL: "https://awwbot.pages.dev/img/aww-logo.png",
        })
        .setTimestamp();

    webhookClient.send({
        username: "aww log",
        avatarURL: "https://awwbot.pages.dev/log-log-circle.png",
        embeds: [commandLogEmbed],
    });
}

export default commandLogger;
