import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { MockService } from './mock.service';

@Module({
  exports:["TestInterface"],
  providers:[{provide:"TestInterface",useClass:MockService}]
})
export class ProjectsModule {}
