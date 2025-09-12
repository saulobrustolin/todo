import { Injectable } from '@nestjs/common';
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from 'src/db/schema';
import { UserBodyProps, UserRegisterProps } from './type';

@Injectable()
export class UserService {
    async getUser(body: UserBodyProps): Promise<{ id: number }> {
        const db = drizzle(process.env.DATABASE_URL!);
            
        const res = await db.select().from(usersTable).where(sql`username = ${body.username} and password = ${body.password}`).limit(1)
        return res[0]
    }

    async postUser(body: UserRegisterProps): Promise<{ id: number }> {
        const db = drizzle(process.env.DATABASE_URL!);
            
        const res = await db.insert(usersTable).values({
            name: body.name,
            username: body.username,
            password: body.password
        }).returning({ id: usersTable.id })
        return res[0]
    }
}
