import getSongByTitle from "@/actions/get-song-by-title";
import Header from "@/components/header";
import SearchInput from "@/components/search-input";
import React from "react";
import PageContent from "../components/page-content";
import MediaItem from "@/components/media-item";
import SearchContent from "../components/search-content";

export const revalidate = 0;

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const songs = await getSongByTitle(searchParams?.title as string);

  return (
    <>
      <Header className="from-neutral-900">
        <SearchInput />
        {/* <PageContent songs={getSongs} /> */}
      </Header>

      <div className="mt-2 mb-7 px-6">
        <SearchContent songs={songs} />
      </div>
    </>
  );
};

export default SearchPage;
