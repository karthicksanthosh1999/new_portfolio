import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type TRecetPost = {
  title: string;
  link: string;
  date: string;
  image: string;
};

const RecentPosts: FC<TRecetPost> = ({ link, title, date, image }) => {
  return (
    <div className="bg-[#140C1C] rounded-lg p-5 space-y-5">
      <h1 className="text-2xl font-semibold text-white uppercase">
        Recent Post
      </h1>
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
