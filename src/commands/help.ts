import {SlashCommandBuilder } from "@discordjs/builders"
import { Client, CommandInteraction, TextChannel } from "discord.js"

export const data = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Ciar um novo help ticket.")
    .addStringOption((option) => 
        option
            .setName("descrição")
            .setDescription("Descreva o seu problema")
            .setRequired(true)
);

export async function execute(interaction: CommandInteraction, client: Client){
    if(!interaction?.channelId){
        return
    }
    
    const channel = await client.channels.fetch(interaction.channelId)
    if(!channel || channel.type !== "GUILD_TEXT"){
        return 
    }

    const thread = await (channel as TextChannel).threads.create({
        name: `support-${Date.now()}`,
        reason: `Support ticket ${Date.now()}`
    })

    const problemDescription = interaction.options.getString("descrição");
    const { user } = interaction;
    thread.send(`**User:** <@${user} **Problema:** ${problemDescription}`)

    return interaction.reply({
        content: "A ajuda esta aqui!",
        ephemeral: true,
    })
}