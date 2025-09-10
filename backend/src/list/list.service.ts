import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { listsTable } from '../db/schema';

@Injectable()
export class ListService {
  async getLists(): Promise<any> {
    const db = drizzle(process.env.DATABASE_URL!);

    return await db.select().from(listsTable)
  }
}
