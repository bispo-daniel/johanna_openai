import { OPENAI_MODEL } from "@/config";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";

const client = new OpenAI();

export const textCompletion = async (messages: Array<ChatCompletionMessageParam>) => {
  const response = await client.chat.completions.create({
    messages,
    model: OPENAI_MODEL,
    max_tokens: 200,
    temperature: 0.7
  });

  const chatText = response.choices[0].message.content;

  return chatText;
}