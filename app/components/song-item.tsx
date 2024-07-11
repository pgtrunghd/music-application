import PlayButton from "@/components/play-button";
import useLoadImage from "@/hooks/use-load-image";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  song: Song;
  onClick?: (id: string) => void;
};

const SongItem = ({ song, onClick }: Props) => {
  const imagePath = useLoadImage(song);

  return (
    <div className="w-full bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition-colors p-3 rounded-md group">
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image src={imagePath as string} fill alt="image" />
        <PlayButton onClick={onClick} songId={song.id} />
      </div>

      <div className="flex flex-col items-start p-3 gap-y-1">
        <p className="font-semibold line-clamp-1 w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm line-clamp-1">{song.author}</p>
      </div>
    </div>
  );
};

export default SongItem;
