"use server";

import prisma from "@/lib/prisma";

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

  return {
    success: true,
  };
}
