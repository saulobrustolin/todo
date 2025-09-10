import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule {}
