import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LocationEdit, PhoneCall } from "lucide-react";
import React from "react";
import { BsEnvelope } from "react-icons/bs";

const Contact = () => {
  const infro = [
    {
      id: "1",
      title: "Phone",
      icon: <PhoneCall size={25} />,
      data: "8220942384",
    },
    {
      id: "2",
      title: "Email",
      icon: <BsEnvelope size={25} />,
      data: "karthick.santhosh1999@mail.com",
    },
    {
      id: "3",
      title: "Address",
      icon: <LocationEdit size={25} />,
      data: "Madurai, Tamilnadu",
    },
  ];

  return (
    <div className="w-full h-fit flex md:flex-row flex-col items-center justify-center">
      <div className="lg:w-1/2 w-full">
        <div className="bg-[#140C1C] sm:p-5 p-3 m-3">
          {/* CONTACT FORM */}
          <form className="grid grid-cols-1 gap-5">
            <div className="flex items-center justify-center flex-col space-y-3">
              <div className="py-5">
                <h1 className="py-2 bg-gradient-to-r from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text md:text-5xl text-4xl font-extrabold text-center">
                  Let’s work together!
                </h1>
              </div>
              <div>
                <p className="text-white text-[17px] text-center w-full lg:max-w-lg">
                  Contact Me.!
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:flex-row flex-col">
              <Input
                className="text-lg placeholder:text-lg text-white h-15"
                placeholder="First Name"
                type="text"
              />
              <Input
                className="text-lg placeholder:text-lg text-white h-15"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="flex gap-5 md:flex-row flex-col">
              <Input
                className="text-lg placeholder:text-lg text-white h-15"
                placeholder="Email"
                type="email"
              />
              <Input
                className="text-lg placeholder:text-lg text-white h-15"
                placeholder="Mobile"
                type="tel"
              />
            </div>
            <Textarea
              placeholder="Message"
              className="text-lg placeholder:text-lg text-white"
            />
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="cursor-pointer px-6 py-6 w-[180px] rounded-full bg-gradient-to-r from-[#8F38DA] to-[#321963] hover:from-[#050709] hover:to-[#8F38DA] text-white text-lg font-semibold shadow-md hover:opacity-90 transition duration-300">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center p-5">
        <div className="space-y-5">
          {infro &&
            infro.map((item, idx) => (
              <div
                className="flex items-end justify-start md:gap-10 gap-2"
                key={idx}>
                <div className="rounded-full p-4 bg-linear-to-r from-[#8750f7] via-10% to-blue-950 text-white">
                  {item.icon}
                </div>
                <div className="max-w-full">
                  <h4 className="text-white font-medium text-lg">
                    {item.title}
                  </h4>
                  <h2 className="text-white font-semibold sm:text-xl text-[16px] leading-loose max-w-full text-wrap">
                    {item.data}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
