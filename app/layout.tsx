import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import SupabaseProvider from "@/providers/supabase-provider";
import UserProvider from "@/providers/user-provider";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import getSongByUserId from "@/actions/get-song-by-user-id";
import getLikedSongs from "@/actions/get-liked-songs";
import Player from "@/components/player";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music app",
  description: "Play your favorite music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getLikedSongs();

  return (
    <html lang="en">
      <body className={(inter.className, "h-full")}>
        <SupabaseProvider>
          <UserProvider>
            <ToastProvider />
            <ModalProvider />
            <Sidebar userSongs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
