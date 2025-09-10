import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('api/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get(':id')
    async getLists(@Param('id') id: string): Promise<any> {
        return {
            "data": await this.taskService.getTasks(id),
        };
    }
}
