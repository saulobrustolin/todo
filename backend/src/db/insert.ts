import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { listsTable, usersTable } from './schema';
  
const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    email: 'john@example.com',
    password: 'banana&cafe'
  };

  const user_id = await db.insert(usersTable).values(user).returning({
    id: usersTable.id
  });
  console.log('New user created!')

  const list1: typeof listsTable.$inferInsert = {
    title: 'Lista de compras',
    subtitle: 'Os itens que devo comprar para 2ª semana do mês',
    user_id: user_id[0].id
  }
  await db.insert(listsTable).values(list1);
  console.log('New list created!')

  const list2: typeof listsTable.$inferInsert = {
    title: 'Lista de materiais',
    subtitle: 'Os materiais que devo comprar para terminar a obra da sala',
    user_id: user_id[0].id
  }
  await db.insert(listsTable).values(list2);
  console.log('New list created!')

  const list3: typeof listsTable.$inferInsert = {
    title: 'Preparação da festa 02/09',
    subtitle: 'Os preparativos necessários para realizar a festa',
    user_id: user_id[0].id
  }
  await db.insert(listsTable).values(list3);
  console.log('New list created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
}

main();
