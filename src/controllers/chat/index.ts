import { OPENAI_DEFAULT_SYSTEM_MESSAGE } from "@/config";
import { io } from "@/Server";
import { textCompletion } from "@/services/OpenAI";
import { ChatCompletionMessageParam } from "openai/resources";

export const MessageController = async (id: string, message: string) => {
  const messages: Array<ChatCompletionMessageParam> = [
    { role: "system", content: OPENAI_DEFAULT_SYSTEM_MESSAGE },
    { role: "user", content: message }
  ];

  const chatText = await textCompletion(messages);

  io.to(id).emit("bot-message", chatText);
}
