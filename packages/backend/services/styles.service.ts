import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllForUser(userId: string) {
  const styles = await prisma.style.findMany({
    where: {
      userId: userId,
    },
  });
  return styles;
}

export async function postStyle(
  name: string,
  description: string,
  userId: string
) {
  const style = await prisma.style.create({
    data: {
      name,
      description,
      userId,
    },
  });
  return style;
}
