import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ListService } from './list.service';
import { ListItems } from './type';

@Controller('api/lists')
export class ListController {
    constructor(private readonly listService: ListService) {}

    @Get()
    async getLists(): Promise<ListItems> {
        return {
            "data": await this.listService.getLists(),
        };
    }

    // @Put(':id') // PUT /list/123
    // updateList(@Param('id') id: string, @Body() body: any) {
    //     return this.listService.updateList(id, body);
    // }
}
