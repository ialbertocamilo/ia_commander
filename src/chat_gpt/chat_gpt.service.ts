import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { CreateCompletionRequest } from 'openai/api';
import { CommandHandler } from '../common/handler/command.handler';
import { CreateTextCommand } from './commands/create.text.command';

@Injectable()
export class ChatGptService {

  openAi: OpenAIApi;

  constructor() {

    const config = new Configuration({
      apiKey: process.env.OPEN_AI_KEY,
    });

    this.openAi = new OpenAIApi(config);
  }


  consult(request:CreateCompletionRequest) {
    CommandHandler.handle(new CreateTextCommand(this.openAi,request))
  }

}
