"use client";

import React from "react";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./button";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/use-auth-modal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/use-user";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out");
    }
    router.refresh();
  };

  return (
    <div
      className={cn(
        "h-fit bg-gradient-to-b from-emerald-700 p-6 rounded-t-lg",
        className
      )}
    >
      <div className="flex w-full items-center justify-between mb-4">
        <div className="hidden md:flex gap-x-2 items-center">
          <Button
            className="bg-black flex items-center justify-center p-0"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={35} />
          </Button>
          <Button
            className="bg-black flex items-center justify-center p-0"
            onClick={() => router.forward()}
          >
            <RxCaretRight className="text-white" size={35} />
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-x-2">
          <Button className="p-2 bg-white flex items-center justify-center">
            <HiHome className="text-black" size={20} />
          </Button>
          <Button className="p-2 bg-white flex items-center justify-center">
            <BiSearch className="text-black" size={20} />
          </Button>
        </div>

        <div className="flex items-center gap-x-4 justify-between">
          {user ? (
            <div className="flex items-center gap-x-4">
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2 font-medium"
              >
                Logout
              </Button>
              <Button className="bg-white">
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className="font-medium text-neutral-300 bg-transparent"
                  onClick={onOpen}
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button className="bg-white px-6 py-2" onClick={onOpen}>
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
