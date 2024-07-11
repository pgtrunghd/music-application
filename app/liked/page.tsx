import getLikedSongs from "@/actions/get-liked-songs";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import LikedContent from "../components/liked-content";

export const revalidate = 0;

const LikedPage = async () => {
  const likedSongs = await getLikedSongs();

  return (
    <>
      <Header className="from-violet-800">
        <div className="flex items-end gap-x-6">
          <div className="relative w-[128px] xl:w-[200px] aspect-square">
            <Image
              src="/images/liked-song.png"
              fill
              alt="liked"
              className="rounded-md"
            />
          </div>

          <div>
            <p className="text-sm hidden md:block font-semibold">Playlist</p>
            <h1 className="text-5xl xl:text-7xl font-bold">Liked songs</h1>
            <p className="text-sm mt-4 font-semibold">
              {likedSongs.length} songs
            </p>
          </div>
        </div>
      </Header>

      <LikedContent songs={likedSongs} />
    </>
  );
};

export default LikedPage;
