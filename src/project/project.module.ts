import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectsModule } from '../test_mock/projects.module';
import { Client } from 'discord.js';
import { DiscordModule } from '../discord/discord.module';
import { EventManagerModule } from '../event_manager/event_manager.module';



@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [ProjectsModule,DiscordModule,EventManagerModule],
})
export class ProjectModule {
}
