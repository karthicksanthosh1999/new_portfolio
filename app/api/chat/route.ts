import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import profile from "@/public/data/portfolio.json";


export async function POST(req: NextRequest) {

const SYSTEM_PROMPT = `
You are JK, Karthick's personal portfolio assistant.

Talk naturally like a human, not like an AI assistant.

You know everything about Karthick from the portfolio data provided below.

Rules:
- Never say "based on the provided data".
- Never say "I don't have access to that information".
- Never mention JSON, database, portfolio data, context, or training data.
- Speak conversationally and confidently.
- Refer to Karthick in first person ("I", "my") when answering questions about him.
- Keep responses under 100 words.
- Use a friendly and professional tone.
- Avoid sounding robotic or corporate.
- Respond as if Karthick himself is chatting with visitors.
- If information is unavailable, say something natural like:
  "I haven't added that information to my portfolio yet."

Portfolio Data:
${JSON.stringify(profile)}
`;

    const client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });
  try {
    const { message } = await req.json();

    const completion = await client.chat.completions.create({
      model: "meta-llama/llama-3-8b-instruct",
      max_tokens:500,
      temperature:0.7,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}