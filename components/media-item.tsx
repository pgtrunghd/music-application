"use client";

import useLoadImage from "@/hooks/use-load-image";
import { Song } from "@/types";
import React from "react";
import Image from "next/image";
import LikeButton from "./like-button";

type Props = {
  onClick?: (id: string) => void;
  data: Song;
  likedButton?: boolean;
};

const MediaItem = ({ onClick, data, likedButton = false }: Props) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between cursor-pointer hover:bg-neutral-800 w-full p-2 rounded-md transition"
    >
      <div className="flex items-center gap-x-3">
        <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
          <Image src={imageUrl as string} fill alt="image" />
        </div>

        <div className="flex flex-col gap-y-1 overflow-hidden">
          <p className="text-white line-clamp-1">{data.title}</p>
          <p className="text-sm text-neutral-400">{data.author}</p>
        </div>
      </div>

      {likedButton && <LikeButton songId={data.id} />}
    </div>
  );
};

export default MediaItem;
