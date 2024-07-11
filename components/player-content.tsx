import usePlayer from "@/hooks/use-player";
import { Song } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import useSound from "use-sound";
import Slider from "./slider";
import { useUser } from "@/hooks/use-user";
import LikeButton from "./like-button";

type Props = {
  song: Song;
  songUrl: string;
  key: string;
  imageUrl: string;
};

const PlayerContent = ({ song, songUrl, key, imageUrl }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const player = usePlayer();
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const [play, { pause, sound, duration }] = useSound(songUrl, {
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  });
  const [seconds, setSeconds] = useState();

  const sec = duration! / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };

  const onPlayPrev = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];
    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }
    player.setId(previousSong);
  };

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];
    if (!nextSong) {
      return player.setId(player.ids[0]);
    }
    player.setId(nextSong);
  };

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  useEffect(() => {
    sound?.play();

    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);

    return () => {
      sound?.unload();
      clearInterval(interval);
    };
  }, [sound]);

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[120px] aspect-square relative rounded-md overflow-hidden shadow-md">
        <Image src={imageUrl as string} fill alt="song-image" />
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-base font-semibold flex items-center justify-between">
          {song?.title}
          <LikeButton songId={song.id} />
        </p>
        <p className="text-sm text-neutral-400">{song?.author}</p>
        <div className="w-full">
          <Slider
            data={[seconds!]}
            max={sec}
            onValueCommit={(e) => {
              sound?.seek([e]);
            }}
          />
        </div>
        <div className="flex items-center justify-between text-sm mt-1">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-x-2">
          <button onClick={onPlayPrev}>
            <AiFillStepBackward
              size={30}
              className="text-neutral-400 hover:text-white transition"
            />
          </button>
          <button
            className="bg-white size-10 flex items-center justify-center rounded-full"
            onClick={handlePlay}
          >
            <Icon size={30} className="text-black" />
          </button>
          <button onClick={onPlayNext}>
            <AiFillStepForward
              size={30}
              className="text-neutral-400 hover:text-white transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
