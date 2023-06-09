import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// This function returns all styles for a given user
export async function getAllForUser(userId: string) {
  const styles = await prisma.style.findMany({
    where: {
      userId: userId,
    },
  });
  return styles;
}

export async function getStyle(styleId: number) {
  const style = await prisma.style.findUnique({
    where: {
      id: styleId,
    },
  });
  return style;
}

// This function creates a new style record in the database.
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

export async function deleteStyle(styleId: number) {
  const style = await prisma.style.delete({
    where: {
      id: styleId,
    },
  });
  return style;
}
