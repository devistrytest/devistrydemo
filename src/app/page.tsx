import AddMessage from "@/components/AddMessage";
import prisma from "@/lib/prisma";

export default async function Home() {
  const messages = await prisma.message.findMany();

  return (
    <main>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <p>{message.text}</p>
          </div>
        );
      })}
      <AddMessage />
    </main>
  );
}
