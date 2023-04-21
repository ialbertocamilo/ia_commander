import { Module } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { DiscordController } from './discord.controller';
import { Client, Events, IntentsBitField, Message, SlashCommandBuilder } from 'discord.js';

const discordProvider = {
  provide: 'discord-provider',
  useFactory: async () => {

    const intent = new IntentsBitField();
    intent.add([1, 512, 4096, 32768]);

    const cmd = new SlashCommandBuilder().setName('gpt').setDescription('Chat gpt camilo');

    const client = new Client({ intents: intent, rest: { version: '10' } });
    const discordToken= process.env.DISCORD_TOKEN
    await client.login(discordToken);
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
