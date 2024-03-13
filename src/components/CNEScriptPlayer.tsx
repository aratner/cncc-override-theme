import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type CNEScriptPlayerProps = {
  videoId: string;
  /**
   *
   * **CNE Video Player Options**
   * ----------------------------
   *
   * Use the params below to configure the player and video playback behavior. For the script embed, simply include desired key/value pairs in the script url. **All params below are optional**. When in doubt, leave out the option for default behavior.
   *
   * | **Option Name (required)** | **Values (Default)** | **Description** |
   * | -------------------------- | --------------------- | --------------- |
   * | `aspectRatio` | WxH String (`16x9`) | Determines the player and its container's width and height. |
   * | `autoplay` | true/false (`true`) | The video should start playing when: <br>1. The player has loaded<br>2. A specified amount of the player is in the viewport |
   * | `adsDisabled` | true/false (`false`) | Disable all ads. Please don't override the default unless absolutely necessary. |
   * | `continuousPlay` | true/false (`true`) | After a video ends, continue to the next video instead of stopping the player. If the video is in a series, the next video is based on the ordering specified in Admin. Otherwise a related content algorithm is used to determine the next video. |
   * | `hasAnimatedThumb` | true/false (`true`) | The player should use the 5s animated clip for thumbnails and poster frames. |
   * | `hideHoverTitle` | true/false (`false`) | Don't show the title when the user mouses over the player. Useful for small players and customizations. |
   * | `hidePosterTitle` | true/false (`false`) | Don't overlay the title on the poster frame. |
   * | `loopVideo` | true/false (`false`) | After the the video is done, keep replaying it indefinitely instead. To play a video once, then stop, set `continuousPlay` false. If instead you want to continue playing different videos indefinitely, set `continuousPlay` true. |
   * | `muted` | true/false (`true`) | Determines whether or not the video starts muted (this may be overridden by the last user selection, which is stored in a cookie). |
   */
  queryParameters?: string;
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
