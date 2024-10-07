import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function create_navlist({ argument }: { argument: string }) {
  const navlist = await prisma.navlist.create({
    data: {
      title: argument,
    },
  });
  console.log(navlist);
}
