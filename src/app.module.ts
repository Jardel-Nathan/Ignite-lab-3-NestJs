import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  //! imports is an array of modules that will be imported into the current module. doc: https://docs.nestjs.com/modules#modules
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
