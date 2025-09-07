import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-[#140C1C] w-full p-5">
      <h4 className="text-white uppercase text-2xl font-semibold">
        Get In Touch
      </h4>
      <form action="" className="flex gap-5 flex-col mt-5">
        <div>
          <Input
            type="text"
            placeholder="Name"
            className="p-4 w-full bg-[#050709] border-blue-600 border"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            className="p-4 w-full bg-[#050709] border-blue-600 border"
          />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            className="p-4 w-full bg-[#050709] border-blue-600 border"
          />
        </div>
        <div>
          <Button
            type="submit"
            variant={"outline"}
            className="cursor-pointer px-5 py-6 text-sm w-full rounded-full bg-gradient-to-r from-[#8F38DA] to-[#321963] hover:from-[#050709] hover:to-[#8F38DA] text-white font-semibold shadow-md hover:opacity-90 transition duration-300">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
