import { ICommand } from '../../common/interfaces/command.interface';
import { OpenAIApi } from 'openai';
import { CreateCompletionRequest } from 'openai/api';

export class CreateTextCommand implements ICommand{

  constructor(readonly openAi:OpenAIApi,readonly attr:CreateCompletionRequest) {
  }
  async execute(): Promise<void> {
    const response=await this.openAi.createCompletion(this.attr)
    console.log(response);
    // eventBus.emit(new UpdateDataResultEvent())
  }



}