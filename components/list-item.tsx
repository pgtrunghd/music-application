"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";
import Button from "./button";

type Props = {
  image: string;
  name: string;
  href: string;
};

export const ListItem = ({ image, name, href }: Props) => {
  const router = useRouter();

  const onClick = () => {
    // Add authentication before push
    router.push(href);
  };

  return (
    <div
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative min-w-[64px] min-h-[64px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>

      <Button className="w-fit absolute right-5 opacity-0 translate-y-1/4 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md hover:scale-110 transition">
        <FaPlay className="text-black" />
      </Button>
    </div>
  );
};
