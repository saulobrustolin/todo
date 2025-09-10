import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { tasksTable } from 'src/db/schema';

@Injectable()
export class TaskService {
    async getTasks(id: string): Promise<any> {
        const db = drizzle(process.env.DATABASE_URL!);
    
        return await db.select().from(tasksTable).where(eq(tasksTable.list_id, +id))
    }
}
