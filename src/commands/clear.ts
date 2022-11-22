import {SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction} from "discord.js"

export const data = new SlashCommandBuilder()
    .setName("clear")
    .setDescription("limpa as msg do chat");

export async function execute(interaction: CommandInteraction){
    return interaction.reply("esta funcionando");
}