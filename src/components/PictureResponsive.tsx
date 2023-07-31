import type { CSSProperties } from "react";

interface PictureResponsiveProps {
  imageType: "fixed" | "fluid";
  containerClass?: string;
  childClass?: string;
  domain: string;
  copilotid: string;
  fileName: string;
  width: number;
  widthList?: number[];
  height?: number;
  sizes?: string;
  style?: CSSProperties;
  alttext: string;
  loading?: "lazy" | "eager";
}

function createSrcSet(
  domain: string,
  copilotid: string,
  fileName: string,
  widthList: number[],
  fileExtension: string
) {
  return widthList
    .map(
      (width) =>
        `https://${domain}/photos/${copilotid}/w_${width}/${fileName}.${fileExtension} ${width}w`
    )
    .join(", ");
}

export default function PictureResponsive({
  imageType,
  containerClass,
  childClass,
  domain,
  copilotid,
  fileName,
  width,
  widthList,
  height,
  sizes,
  style,
  alttext,
  loading,
}: PictureResponsiveProps) {
  const fluidSrcSet = (
    <>
      <source
        type="image/avif"
        srcSet={createSrcSet(
          domain,
          copilotid,
          fileName,
          widthList ?? [],
          "avif"
        )}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={createSrcSet(
          domain,
          copilotid,
          fileName,
          widthList ?? [],
          "webp"
        )}
        sizes={sizes}
      />
      <source
        type="image/jpeg"
        srcSet={createSrcSet(
          domain,
          copilotid,
          fileName,
          widthList ?? [],
          "jpg"
        )}
        sizes={sizes}
      />
    </>
  );

  const fixedSrcSet = (
    <>
      <source
        srcSet={`https://${domain}/photos/${copilotid}/w_${width}/${fileName}.avif 1x, 
               https://${domain}/photos/${copilotid}/w_${
          width * 2
        }/${fileName}.avif 2x`}
        type="image/avif"
      />
      <source
        srcSet={`https://${domain}/photos/${copilotid}/w_${width}/${fileName}.webp 1x, 
               https://${domain}/photos/${copilotid}/w_${
          width * 2
        }/${fileName}.webp 2x`}
        type="image/webp"
      />
    </>
  );

  return (
    <picture className={containerClass} style={style}>
      {imageType === "fluid" ? fluidSrcSet : fixedSrcSet}
      <img
        className={childClass}
        width={width}
        height={height}
        src={`https://${domain}/photos/${copilotid}/w_${width}/${fileName}.jpg`}
        alt={alttext}
        loading={loading}
      />
    </picture>
  );
}
