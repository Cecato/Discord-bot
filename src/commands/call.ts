import {SlashCommandBuilder } from "@discordjs/builders"
import { Client, CommandInteraction} from "discord.js"
import { joinVoiceChannel } from "@discordjs/voice";


export const data = new SlashCommandBuilder()
    .setName("call")
    .setDescription("bote entrar na call");

export async function execute(interaction: CommandInteraction, client: Client){

    const canal: any = client.channels.cache.get("983175059935997996");
    const canalId:string = canal.id;

    console.log(canal);
    console.log(canalId);
    return interaction.reply(`texto bom: ${canal}`);
}