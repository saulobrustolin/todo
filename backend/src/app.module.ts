import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ListController, TaskController, UserController],
  providers: [AppService, ListService, TaskService, UserService],
})
export class AppModule {}
