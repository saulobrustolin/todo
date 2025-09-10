import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ListController, TaskController],
  providers: [AppService, ListService, TaskService],
})
export class AppModule {}
