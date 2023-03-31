import { Module } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { DiscordController } from './discord.controller';
import { Client, Events, IntentsBitField, Message, SlashCommandBuilder } from 'discord.js';

const discordProvider = {
  provide: 'discord-provider',
  useFactory: () => {

    const intent = new IntentsBitField();
    intent.add([1, 512, 4096, 32768]);

    const cmd = new SlashCommandBuilder().setName('gpt').setDescription('Chat gpt camilo');

    const client = new Client({ intents: intent, rest: { version: '10' } });
    client.login('MTA5MDk0MzIzMDYzNzUxODg0OA.Gn_iG5.qI_Tc7LkeTfJko4HoHDrcUQDkcjGhVo8Dyrorw');
    client.on('messageCreate', (msg: Message) => {
      if (msg.author.username.toLowerCase() == 'noway' && msg.channelId == '721133700594794577') {
        msg.reply({
          content: 'Hello jefecito',
        });
      }

      if (msg.content.startsWith('!gpt')) {
        msg.reply({
          content: 'Chat gpt',
        });
      }
    });
    client.on(Events.ClientReady, () => {
      console.log('Bot listo!');
    });

    return client;
  },

};

@Module({
  controllers: [DiscordController],
  providers: [DiscordService, discordProvider],
  exports: ['discord-provider'],
})
export class DiscordModule {
}
