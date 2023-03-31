import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './test_mock/projects.module';
import { ProjectModule } from './project/project.module';
import { DiscordModule } from './discord/discord.module';
import { ChatGptModule } from './chat_gpt/chat_gpt.module';
import { ConfigModule } from '@nestjs/config';
import { EventManagerModule } from './event_manager/event_manager.module';
import { EventDispatcherService } from './event_manager/event-dispatcher/event.dispatcher.service';

@Module({
  imports: [ProjectsModule, ProjectModule, DiscordModule, ChatGptModule, ConfigModule.forRoot({
    envFilePath: '.env',
  }), EventManagerModule],
  controllers: [AppController],
  providers: [AppService, EventDispatcherService],
})
export class AppModule {
}
