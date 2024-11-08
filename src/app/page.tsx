import AddMessage from "@/components/AddMessage";
import prisma from "@/lib/prisma";

export default async function Home() {
  const messages = await prisma.message.findMany();

  return (
    <main>
      <div className="my-8">
        {messages.map((message) => {
          return <p key={message.id}>{message.text}</p>;
        })}
      </div>
      <AddMessage />
    </main>
  );
}
