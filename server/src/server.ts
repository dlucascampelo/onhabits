import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";


const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async () => {
  const onhabit = await prisma.onHabit.findMany();
  return onhabit;
});

app.listen({
  port: 3333
});