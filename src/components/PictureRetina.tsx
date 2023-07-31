interface PictureRetinaProps {
  customClass?: string;
  domain: string;
  copilotid: string;
  width: number;
  height?: number;
  filename: string;
  alttext: string;
  loading?: "lazy" | "eager" | undefined;
}

export default function PictureRetina({
  customClass,
  domain,
  copilotid,
  width,
  height,
  filename,
  alttext,
  loading,
}: PictureRetinaProps) {
  return (
    <picture className={customClass}>
      <source
        srcSet={`https://${domain}/photos/${copilotid}/w_${width}/${filename}.avif 1x, 
                 https://${domain}/photos/${copilotid}/w_${
          width * 2
        }/${filename}.avif 2x`}
        type="image/avif"
      />
      <source
        srcSet={`https://${domain}/photos/${copilotid}/w_${width}/${filename}.avif 1x, 
                 https://${domain}/photos/${copilotid}/w_${
          width * 2
        }/${filename}.webp 2x`}
        type="image/webp"
      />
      <img
        width={width}
        height={height}
        src={`https://${domain}/photos/${copilotid}/w_${width}/${filename}.jpg`}
        alt={alttext}
        loading={loading}
      />
    </picture>
  );
}
