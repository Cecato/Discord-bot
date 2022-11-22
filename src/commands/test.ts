import {SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction} from "discord.js"

export const data = new SlashCommandBuilder()
    .setName("test")
    .setDescription("Teste de desenvolvimento");

export async function execute(interaction: CommandInteraction){
    return interaction.reply("esta funcionando");
}