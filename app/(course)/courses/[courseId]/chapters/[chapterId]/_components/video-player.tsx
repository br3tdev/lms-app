"use client";

import { cn } from "@/lib/utils";
import MuxPlayer from "@mux/mux-player-react";
import { Loader2, Lock } from "lucide-react";
import { useState } from "react";

export interface IVideoPlayerProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  title: string;
  nextChapterId: string;
  isLocked: boolean;
  completeOnEnd: boolean;
}

export default function VideoPlayer({
  playbackId,
  title,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
}: IVideoPlayerProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative aspect-video">
      {!isLocked && (
        <div className="absolute flex items-center justify-center bg-slate-800 inset-0">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}

      {isLocked && (
        <div className="absolute flex flex-col gap-y-2 items-center justify-center bg-slate-800 text-secondary inset-0">
          <Lock className="h-8 w-8" />
          <p className="text-sm">This chapter is locked!</p>
        </div>
      )}

      {!isLocked && (
        <MuxPlayer
          title={title}
          className={cn(!isReady && "hidden")}
          onCanPlay={() => setIsReady(true)}
          onEnded={() => {}}
          autoPlay
          playbackId={playbackId}
        />
      )}
    </div>
  );
}
