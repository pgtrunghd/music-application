"use client";

import useGetSongById from "@/hooks/use-get-song-by-id";
import useLoadImage from "@/hooks/use-load-image";
import useLoadSong from "@/hooks/use-load-song";
import usePlayer from "@/hooks/use-player";
import { useUser } from "@/hooks/use-user";
import { Song } from "@/types";
import PlayerContent from "./player-content";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const imageUrl = useLoadImage(song as Song);
  const songUrl = useLoadSong(song!);
  const { user } = useUser();

  if (!song || !songUrl || !imageUrl || !user) {
    return null;
  }

  return (
    <div className="fixed bottom-2 left-[50%] translate-x-[-50%] z-1 bg-neutral-700/20 backdrop-blur-md p-3 rounded-lg max-w-[600px] w-full">
      <PlayerContent
        song={song}
        songUrl={songUrl}
        key={songUrl}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Player;
