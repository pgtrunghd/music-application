import getSongByUserId from "@/actions/get-song-by-user-id";
import useAuthModal from "@/hooks/use-auth-modal";
import useUploadModal from "@/hooks/use-upload-modal";
import { useUser } from "@/hooks/use-user";
import { Song } from "@/types";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./media-item";
import useOnPlay from "@/hooks/use-on-play";

type Props = {
  userSongs: Song[];
};

const Library = ({ userSongs }: Props) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const onPlay = useOnPlay(userSongs);

  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      authModal.onOpen();
      return;
    }
    uploadModal.onOpen();
  };

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={24} />
          <p>Your library</p>
        </div>

        <AiOutlinePlus
          className="text-neutral-400 cursor-pointer hover:text-white transition-colors"
          size={20}
          onClick={onClick}
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {userSongs.map((item) => (
          <MediaItem
            key={item.id}
            data={item}
            onClick={(id: string) => onPlay(id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Library;
