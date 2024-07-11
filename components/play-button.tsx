"use client";

import usePlayer from "@/hooks/use-player";
import React from "react";
import { FaPlay } from "react-icons/fa";

type Props = {
  songId: string;
  onClick?: (id: string) => void;
};

const PlayButton = ({ songId, onClick }: Props) => {
  const handlePlay = (id: string) => {
    if (onClick) {
      return onClick(id);
    }
  };

  return (
    <button
      className="transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 absolute bottom-1 right-1"
      onClick={() => handlePlay(songId)}
    >
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
