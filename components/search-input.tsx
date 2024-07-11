"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Input from "./input";
import useDebounce from "@/hooks/use-debounce";
import qs from "query-string";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      className="rounded-full py-[10px] max-w-[400px] w-full ml-0"
      placeholder="What do you want to listen to?"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
