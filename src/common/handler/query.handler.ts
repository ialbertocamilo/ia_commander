
import { IQuery } from '../interfaces/query.interface';
import { Logger } from '@nestjs/common';

export class QueryHandler<T> {
  private static logger: Logger;
  // static handle (query:IQuery):Promise<T>{
  //   this.logger.log(`Returning query data ${query} `);
  //   return query.execute() as any;
  // }
}