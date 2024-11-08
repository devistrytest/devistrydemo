"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface saveMessageActionParams {
  message: string;
}

export default async function saveMessageAction({
  message,
}: saveMessageActionParams) {
  if (!message)
    return {
      success: false,
      message: "Please enter a messsage",
    };

  await prisma.message.create({
    data: {
      text: message,
    },
  });

  revalidatePath("/");

  return {
    success: true,
  };
}
