import AddMessage from "@/components/AddMessage";
import prisma from "@/lib/prisma";

export default async function Home() {
  const messages = await prisma.message.findMany();

  return (
    <main>
      <h1 className="text-4xl my-8">Messages app</h1>
      <div className="my-8">
        {messages.map((message) => {
          return (
            <p key={message.id} className="my-2">
              {message.text}
            </p>
          );
        })}
      </div>
      <AddMessage />
    </main>
  );
}
