import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { listsTable, tasksTable, usersTable } from './schema';
  
const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  // const user: typeof usersTable.$inferInsert = {
  //   name: 'John',
  //   email: 'john@example.com',
  //   password: 'banana&cafe'
  // };

  // const user_id = await db.insert(usersTable).values(user).returning({
  //   id: usersTable.id
  // });
  // console.log('New user created!')

  // const list1: typeof listsTable.$inferInsert = {
  //   title: 'Lista de compras',
  //   subtitle: 'Os itens que devo comprar para 2ª semana do mês',
  //   user_id: user_id[0].id
  // }
  // await db.insert(listsTable).values(list1);
  // console.log('New list created!')

  // const list2: typeof listsTable.$inferInsert = {
  //   title: 'Lista de materiais',
  //   subtitle: 'Os materiais que devo comprar para terminar a obra da sala',
  //   user_id: user_id[0].id
  // }
  // await db.insert(listsTable).values(list2);
  // console.log('New list created!')

  // const list3: typeof listsTable.$inferInsert = {
  //   title: 'Preparação da festa 02/09',
  //   subtitle: 'Os preparativos necessários para realizar a festa',
  //   user_id: user_id[0].id
  // }
  // await db.insert(listsTable).values(list3);
  // console.log('New list created!')

  // const task1: typeof tasksTable.$inferInsert = {
  //   title: 'Arroz',
  //   subtitle: '2x Arroz Pratofino 5kg',
  //   list_id: 1
  // }
  // await db.insert(tasksTable).values(task1);
  // console.log('New task created!')

  const task2: typeof tasksTable.$inferInsert = {
    title: 'Feijão',
    subtitle: '3x Feijão Carioca 1kg',
    list_id: 1
  }
  await db.insert(tasksTable).values(task2);
  console.log('New task created!')

  const task3: typeof tasksTable.$inferInsert = {
    title: 'Lentilha',
    subtitle: '2x Lentilha 1kg',
    list_id: 1
  }
  await db.insert(tasksTable).values(task3);
  console.log('New task created!')

  const task4: typeof tasksTable.$inferInsert = {
    title: 'Tijolo',
    subtitle: '1 pack de tijolos 6 furos',
    list_id: 2
  }
  await db.insert(tasksTable).values(task4);
  console.log('New task created!')

  const task5: typeof tasksTable.$inferInsert = {
    title: 'Cimento',
    subtitle: '8 sacos de cimento',
    list_id: 2
  }
  await db.insert(tasksTable).values(task5);
  console.log('New task created!')

  // const users = await db.select().from(usersTable);
  // console.log('Getting all users from the database: ', users)
}

main();
