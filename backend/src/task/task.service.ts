import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { tasksTable } from 'src/db/schema';
import { TaskProps } from './type';

@Injectable()
export class TaskService {
    async getTasks(id: string): Promise<TaskProps[]> {
        const db = drizzle(process.env.DATABASE_URL!);
        
        return await db.select().from(tasksTable).where(eq(tasksTable.list_id, +id)).orderBy(tasksTable.finish, tasksTable.title)
    }
    
    async patchTasks(id: string, obj: any): Promise<{id: number}> {
        const db = drizzle(process.env.DATABASE_URL!);
        const res = await db.update(tasksTable).set(obj).where(eq(tasksTable.id, +id)).returning({ id: tasksTable.id });
        return res[0]
    }

    async postTasks(obj: any): Promise<{id: number}> {
        const db = drizzle(process.env.DATABASE_URL!);
        const res = await db.insert(tasksTable).values(obj).returning({ id: tasksTable.id });
        return res[0]
    }

    async deleteTasks(id: string): Promise<{id: number}> {
        const db = drizzle(process.env.DATABASE_URL!);
        const res = await db.delete(tasksTable).where(eq(tasksTable.id, +id)).returning({ id: tasksTable.id });
        return res[0]
    }
}
