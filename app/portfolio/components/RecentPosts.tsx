import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";

type TRecentPost = {
  title: string;
  link: string;
  date: string;
  image: string;
};

const RecentPosts: FC<TRecentPost> = ({ link, title, date, image }) => {
  return (
    <div className="bg-[#140C1C] rounded-lg p-5 space-y-5 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="text-2xl font-semibold text-white uppercase">
        Recent Post
      </motion.h1>
      <Separator />
      <div className="flex gap-3">
        <Image
          src={image}
          alt={title}
          className="h-[80px] w-[100px] object-cover"
          width={100}
          height={100}
        />
        <div>
          <p className="text-xl font-semibold text-white">{date}</p>
          <Link
            href={link}
            className="hover:text-[#7E4AE7] text-white transition duration-300 ease-in">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
