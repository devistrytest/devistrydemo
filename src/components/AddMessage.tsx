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

    location.reload();
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="block border border-black rounded-md p-2 w-full resize-none max-w-[400px] h-[200px]"
      ></textarea>
      <button
        type="submit"
        className="block bg-black text-white p-2 rounded-md"
      >
        Save
      </button>
    </form>
  );
}