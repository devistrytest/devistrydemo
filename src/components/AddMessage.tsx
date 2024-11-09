"use client";

import saveMessageAction from "@/actions/saveMessageAction";
import { FormEvent, useState } from "react";

export default function AddMessage() {
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const result = await saveMessageAction({
      message: message,
    });

    if (!result.success) {
      alert(result.message);
      return;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="block mb-4 border border-black rounded-md p-2 w-full resize-none max-w-[400px]"
      />
      <button
        type="submit"
        className="block p-2 text-white bg-black rounded-md"
      >
        Save
      </button>
    </form>
  );
}
