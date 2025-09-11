import { Controller, Get, Patch, Param, Body, Post, Delete } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('api/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get(':id')
    async getTasks(@Param('id') id: string): Promise<any> {
        return {
            "data": await this.taskService.getTasks(id),
        };
    }

    @Patch(':id')
    async patchTasks(
        @Param('id') id: string,
        @Body() body: any
    ): Promise<any> {
        return {
            "data": await this.taskService.patchTasks(id, body),
        };
    }

    @Post()
    async postTasks(
        @Body() body: any
    ): Promise<any> {
        return await this.taskService.postTasks(body);
    }

    @Delete(':id')
    async deleteTasks(
        @Param('id') id: string
    ): Promise<any> {
        return await this.taskService.deleteTasks(id);
    }
}
