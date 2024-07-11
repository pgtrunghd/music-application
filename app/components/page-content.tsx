"use client";

import { Song } from "@/types";
import React from "react";
import Image from "next/image";
import SongItem from "./song-item";
import useOnPlay from "@/hooks/use-on-play";

type Props = {
  songs: Song[];
};

const PageContent = ({ songs }: Props) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400 h-full">No songs found</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-4 gap-4">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onClick={(id: string) => onPlay(id)}
        />
      ))}
    </div>
  );
};

export default PageContent;
