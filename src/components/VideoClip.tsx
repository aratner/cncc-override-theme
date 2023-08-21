import type { CSSProperties } from "react";

type VideoClipProps = {
  copilotPosterUrl: string;
  copilotClipUrl: string;
  fileName: string;
  quality: "360p" | "480p" | "720p" | "1080p" | "1440p";
  width: number;
  height?: number;
  autoplay?: boolean;
  playsinline?: boolean;
  loop?: boolean;
  controls?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
  customClass?: string;
  style?: CSSProperties;
};

export default function VideoClip({
  copilotPosterUrl,
  copilotClipUrl,
  fileName,
  quality = "720p",
  width,
  height,
  autoplay = true,
  playsinline = true,
  loop = true,
  controls = false,
  muted = true,
  preload = "auto",
  customClass,
  style,
}: VideoClipProps) {
  const regexID = /\/photos\/([a-f0-9]+)\//;
  const regexClipID = /\/clips\/([a-f0-9]+)\//;
  const regexDomain = /^https?:\/\/([^/]+)/;
  const [, copilotPosterId] = regexID.exec(copilotPosterUrl) ?? [];
  const [, copilotClipId] = regexClipID.exec(copilotClipUrl) ?? [];
  const [, domain] = regexDomain.exec(copilotClipUrl) ?? [];
  return (
    <video
      className={customClass}
      style={style}
      width={width}
      height={height}
      poster={`https://${domain}/photos/${copilotPosterId}/w_${
        width * 2
      }/${fileName}.jpg`}
      autoPlay={autoplay}
      playsInline={playsinline}
      loop={loop}
      muted={muted}
      controls={controls}
      preload={preload}
    >
      <source
        src={`https://${domain}/clips/${copilotClipId}/${quality}/pass/${fileName}.webm`}
        type="video/webm"
      />
      <source
        src={`https://${domain}/clips/${copilotClipId}/${quality}/pass/${fileName}.mp4`}
        type="video/mp4"
      />
    </video>
  );
}
