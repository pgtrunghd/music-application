"use client";

import MediaItem from "@/components/media-item";
import { useUser } from "@/hooks/use-user";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  songs: Song[];
};

const LikedContent = ({ songs }: Props) => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  if (songs.length === 0) {
    return <div className="px-6 text-neutral-400">No liked songs</div>;
  }

  useEffect(() => {
    if (isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  return (
    <div className="px-6 flex flex-col gap-y-2">
      {songs.map((song) => (
        <MediaItem key={song.id} data={song} likedButton />
      ))}
    </div>
  );
};

export default LikedContent;
