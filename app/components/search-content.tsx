"use client";

import MediaItem from "@/components/media-item";
import useOnPlay from "@/hooks/use-on-play";
import { Song } from "@/types";

type Props = {
  songs: Song[];
};

const SearchContent = ({ songs }: Props) => {
  const onPlay = useOnPlay(songs);

  return (
    <div className="mt-4 flex flex-col items-center gap-y-3">
      {songs.map((item) => (
        <>
          <MediaItem likedButton key={item.id} data={item} onClick={(id: string) => onPlay(id)} />
        </>
      ))}
    </div>
  );
};

export default SearchContent;
