// eslint-disable-next-line prettier/prettier
import { ICommand } from '../interfaces/command.interface';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CommandHandler {
  private static logger: Logger;

  static handle(command: ICommand): void {
    this.logger.log(`Executing command ${command} `);
    command.execute();
  }

}
