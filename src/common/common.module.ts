import { Module } from '@nestjs/common';
import { CommandHandler } from './handler/command.handler';

@Module({
  providers: [CommandHandler],
})
export class CommonModule {
}
