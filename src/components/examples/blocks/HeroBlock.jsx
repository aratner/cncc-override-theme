import PictureResponsive from "../PictureResponsive";

export default function HeroBlock({ copilot_image, file_name, alt_text }) {
  const regexID = /\/photos\/([a-f0-9]+)\//;
  const regexDomain = /^https?:\/\/([^/]+)/;
  return (
    <PictureResponsive
      containerClass="block w-full h-auto drop-shadow-xl rounded-xl overflow-hidden border-black border-[1px] my-10 md:my-20"
      childClass="block w-full"
      imageType="fluid"
      domain={regexDomain.exec(copilot_image)[1]}
      copilotid={regexID.exec(copilot_image)[1]}
      width={1920}
      widthList={[480, 960, 1440, 1920]}
      height={359}
      fileName={file_name}
      alttext={alt_text}
      loading={"lazy"}
    />
  );
}
