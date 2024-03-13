import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type CNEScriptPlayerProps = {
  videoId: string;
  queryParameters: string;
  containerClass?: string;
  style?: CSSProperties;
};

export default function CNEScriptPlayer({
  videoId,
  queryParameters,
  containerClass,
  style,
}: CNEScriptPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.async = true;
      script.src = videoId
        ? `//player.cnevids.com/script/video/${videoId}.js?${queryParameters}`
        : "";
      videoRef.current.appendChild(script);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeChild(script);
        }
      };
    }
  }, []);

  return <div ref={videoRef} className={containerClass} style={style} />;
}
