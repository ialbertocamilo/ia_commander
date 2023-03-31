import { Injectable, Logger } from '@nestjs/common';
import { TestInterface } from './test.interface';


@Injectable()
export class MockService implements TestInterface {

  private logger = new Logger(MockService.name);

  constructor() {
    this.logger.debug('Exeucting logger from injectable class ');
  }

  execute(){
    this.logger.debug('Execute from mock service with TestInterface');
  }
}