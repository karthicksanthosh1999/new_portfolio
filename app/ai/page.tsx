"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import service_heror from "@/public/images/service_hero.jpeg";
import ChartHeroSection from "../components/ChatHeroSection";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Message = {
    role: "user" | "ai";
    text: string;
};
const page = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) {
            toast.warning("Fill the input")
            return;
        }
        const userMessage: Message = { role: "user", text: input };
        setMessages((preV) => ([...preV, userMessage]))
        setInput("")
        setLoading(true)

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });

        const data = await res.json();
        console.log(data?.reply)

        setMessages((preV) => [
            ...preV,
            { role: 'ai', text: data?.reply }
        ])
        setLoading(false)
    }

    return (
        <>
            <ChartHeroSection
                title={"Chat With JK-AI"}
                breadcrums={[]}
                image={service_heror}
            />
            <section className="bg-[#321D5A] bg-[radial-gradient(circle,_rgba(50,_29,_90,_1)_0%,_rgba(0,_0,_0,_1)_74%)] overflow-hidden relative border-0">
                <Card className="bg-[#321D5A] bg-[radial-gradient(circle,_rgba(50,_29,_90,_1)_0%,_rgba(0,_0,_0,_1)_74%)] overflow-hidden relative border-0">
                    <CardContent>
                        <CardHeader>
                            <CardTitle className="text-white text-3xl font-bold">Chat with JK-AI</CardTitle>
                        </CardHeader>
                        <Separator />
                        <div className="h-100 overflow-y-auto border p-3 my-3 rounded">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"
                                        }`}
                                >
                                    <span
                                        className={`inline-block p-2 rounded ${msg.role === "user"
                                            ? "rounded-sm bg-gradient-to-r from-[#8F38DA] to-[#050709] text-white"
                                            : "rounded-sm bg-gradient-to-r from-[#8F38DA] to-[#050709] text-white"
                                            }`}
                                    >
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                            {loading && <p>Typing...</p>}
                        </div>
                        <div className="flex items-center justify-between gap-2 h-full ">
                            <Input
                                className="md:text-[15px] text-sm text-white font-normal"
                                placeholder="Ask your question about JK..."
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <Button
                                size={'lg'}
                                variant={'ghost'}
                                onClick={sendMessage}
                                className="cursor-pointer rounded-sm bg-gradient-to-r from-[#8F38DA] to-[#321963] hover:from-[#050709] hover:to-[#8F38DA] text-white font-semibold shadow-md hover:opacity-90 hover:text-white transition duration-300">
                                <span>Send</span>
                                <Send /></Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    )
}

export default page
