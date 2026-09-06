"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  User,
  RotateCcw,
  MessageCircle,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

import service_heror from "@/public/images/service_hero.jpeg";
import ChartHeroSection from "../components/ChatHeroSection";

type Message = {
  role: "user" | "ai";
  text: string;
  time: string;
};

const suggestions = [
  "Tell me about Karthick",
  "What are his technical skills?",
  "Tell me about his projects",
  "What is his experience?",
  "What technologies does he use?",
  "How can I contact him?",
];

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sendMessage = async (customMessage?: string) => {
    const message = customMessage ?? input;

    if (!message.trim()) {
      toast.warning("Please enter a message");
      return;
    }

    if (message.length > 500) {
      toast.warning("Message should be less than 500 characters");
      return;
    }

    const userMessage: Message = {
      role: "user",
      text: message.trim(),
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();

      if (!data?.reply) {
        throw new Error("No response received");
      }

      const aiMessage: Message = {
        role: "ai",
        text: data.reply,
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);

      toast.error("Unable to connect with JK-AI");

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I couldn't process your message right now. Please try again.",
          time: getCurrentTime(),
        },
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (!loading) {
        sendMessage();
      }
    }
  };

  const clearChat = () => {
    setMessages([]);
    setInput("");

    toast.success("Chat cleared");

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <>
      {/* Hero */}
      <ChartHeroSection
        title="Chat With JK-AI"
        breadcrums={[]}
        image={service_heror}
      />

      {/* Chat Section */}
      <section className="relative min-h-[calc(100vh-250px)] overflow-hidden bg-[#080510] px-3 py-8 sm:px-6 lg:px-10">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-100 w-100 -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">

          {/* Chat Card */}
          <Card className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-0 shadow-2xl shadow-purple-950/20 backdrop-blur-xl">

            {/* Header */}
            <CardHeader className="border-b border-white/10 bg-white/[0.02] px-5 py-5 sm:px-7">

              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-4">

                  {/* AI Avatar */}
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8F38DA] to-[#321963] shadow-lg shadow-purple-900/30">

                    <Bot
                      size={25}
                      className="text-white"
                    />

                    {/* Online indicator */}
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#12091c] bg-green-500" />
                  </div>

                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-white">
                      JK-AI
                      <Sparkles
                        size={17}
                        className="text-purple-400"
                      />
                    </CardTitle>

                    <p className="mt-1 text-sm text-white/50">
                      Karthick&apos;s personal AI assistant
                    </p>
                  </div>

                </div>

                {/* Clear Chat */}
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearChat}
                    disabled={loading}
                    title="Clear chat"
                    className="cursor-pointer text-white/50 hover:bg-white/10 hover:text-white"
                  >
                    <RotateCcw size={18} />
                  </Button>
                )}

              </div>

            </CardHeader>

            {/* Messages */}
            <CardContent className="p-0">

              <div className="h-[55vh] min-h-100 max-h-150 overflow-y-auto px-4 py-6 sm:px-7">

                {/* Empty State */}
                {messages.length === 0 && (
                  <div className="flex min-h-full flex-col items-center justify-center text-center">

                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">

                      <MessageCircle
                        size={30}
                        className="text-purple-400"
                      />

                    </div>

                    <h2 className="text-xl font-semibold text-white sm:text-2xl">
                      Hi! I&apos;m JK-AI 👋
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                      Ask me anything about Karthick&apos;s experience,
                      skills, projects, education, or professional journey.
                    </p>

                    {/* Suggestions */}
                    <div className="mt-7 flex max-w-2xl flex-wrap justify-center gap-2">

                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => sendMessage(suggestion)}
                          disabled={loading}
                          className="cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                        >
                          {suggestion}
                        </button>
                      ))}

                    </div>
                  </div>
                )}

                {/* Messages */}
                <div className="space-y-5">

                  {messages.map((msg, index) => {
                    const isUser = msg.role === "user";

                    return (
                      <div
                        key={`${msg.time}-${index}`}
                        className={`flex items-end gap-2.5 ${
                          isUser
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >

                        {/* AI Avatar */}
                        {!isUser && (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8F38DA] to-[#321963]">

                            <Bot
                              size={16}
                              className="text-white"
                            />

                          </div>
                        )}

                        <div
                          className={`max-w-[85%] sm:max-w-[70%] ${
                            isUser
                              ? "items-end"
                              : "items-start"
                          } flex flex-col`}
                        >

                          {/* Bubble */}
                          <div
                            className={`rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                              isUser
                                ? "rounded-br-sm bg-gradient-to-r from-[#8F38DA] to-[#321963] text-white"
                                : "rounded-bl-sm border border-white/10 bg-white/[0.06] text-white/85"
                            }`}
                          >
                            {msg.text}
                          </div>

                          {/* Time */}
                          <span className="mt-1 px-1 text-[10px] text-white/30">
                            {msg.time}
                          </span>

                        </div>

                        {/* User Avatar */}
                        {isUser && (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">

                            <User
                              size={16}
                              className="text-white/70"
                            />

                          </div>
                        )}

                      </div>
                    );
                  })}

                  {/* Typing Animation */}
                  {loading && (
                    <div className="flex items-end gap-2.5">

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8F38DA] to-[#321963]">

                        <Bot
                          size={16}
                          className="text-white"
                        />

                      </div>

                      <div className="rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.06] px-4 py-3">

                        <div className="flex items-center gap-1.5">

                          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.3s]" />

                          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.15s]" />

                          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400" />

                        </div>

                      </div>

                    </div>
                  )}

                  <div ref={messagesEndRef} />

                </div>

              </div>

              <Separator className="bg-white/10" />

              {/* Input Area */}
              <div className="bg-white/[0.02] p-4 sm:p-5">

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 p-1.5 shadow-inner">

                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    maxLength={500}
                    placeholder="Ask something about Karthick..."
                    className="h-11 border-0 bg-transparent text-sm text-white shadow-none outline-none placeholder:text-white/30 focus-visible:ring-0"
                  />

                  <Button
                    type="button"
                    onClick={() => sendMessage()}
                    disabled={loading || !input.trim()}
                    className="h-11 shrink-0 cursor-pointer rounded-lg bg-gradient-to-r from-[#8F38DA] to-[#321963] px-4 text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:from-[#321963] hover:to-[#8F38DA] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="hidden sm:inline">
                      {loading ? "Sending..." : "Send"}
                    </span>

                    <Send
                      size={17}
                      className="sm:ml-2"
                    />
                  </Button>

                </div>

                {/* Footer */}
                <div className="mt-2 flex items-center justify-between px-1">

                  <p className="text-[10px] text-white/25">
                    JK-AI can answer questions about Karthick.
                  </p>

                  <p className="text-[10px] text-white/25">
                    {input.length}/500
                  </p>

                </div>

              </div>

            </CardContent>

          </Card>

          {/* Bottom text */}
          <p className="mt-5 text-center text-xs text-white/25">
            Powered by AI • Built with Next.js & TypeScript
          </p>

        </div>
      </section>
    </>
  );
};

export default Page;
