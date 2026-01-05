import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// 1. Initialize outside the handler (but check for key inside or via assertion)
const apiKey = process.env.GEMINI_API_KEY;
const genAi = new GoogleGenerativeAI(apiKey || "");

export const POST = async (req: NextRequest) => {
    try {
        // 2. Validate API Key existence
        if (!apiKey) {
            return NextResponse.json({ error: "Gemini API Key not configured" }, { status: 500 });
        }

        // 3. Extract and validate input
        const { message } = await req.json();
        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        // 4. Use systemInstruction for better persona sticking
        const model = genAi.getGenerativeModel({
            model: "gemini-2.0-flash",
            systemInstruction: `
                You are an AI assistant for a developer's portfolio. 
                Answer like a professional HR assistant representing the candidate.
                
                Candidate details:
                - Full Stack Developer (Next.js, React, Node.js, PostgreSQL)
                - 2+ years experience
                - Strong in TypeScript, Redux, React Query
                - Built CRM, dashboards, AI apps
                - Looking for product-based company roles
                
                Be concise, helpful, and professional.
            `,
        });

        // 5. Generate content
        const result = await model.generateContent(message);
        const responseText = result.response.text();

        return NextResponse.json({ reply: responseText });

    } catch (error: any) {

        if (error.status === 429) {
            return NextResponse.json(
                { error: "Rate limit reached. Please try again in 30 seconds." },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}