import { Injectable, Logger } from '@nestjs/common';
import { TestInterface } from './test.interface';


@Injectable()
export class TestService implements TestInterface {

  private logger = new Logger(TestService.name);

  constructor() {
    this.logger.debug('Exeucting logger from injectable class ');
  }

  execute(){
    this.logger.debug('Exeucting logger from service INTERFACE from injectable class 2');
  }
}