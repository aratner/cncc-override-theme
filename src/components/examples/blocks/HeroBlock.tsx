import PictureResponsive from "../../PictureResponsive";

type HeroBlockProps = {
  copilot_image: string;
  file_name: string;
  alt_text: string;
};

export default function HeroBlock({
  copilot_image,
  file_name,
  alt_text,
}: HeroBlockProps) {
  return (
    <PictureResponsive
      containerClass="block w-full h-auto drop-shadow-xl rounded-xl overflow-hidden border-black border-[1px] my-10 md:my-20"
      childClass="block w-full"
      imageType="fluid"
      copilotImageUrl={copilot_image}
      width={1920}
      widthList={[480, 960, 1440, 1920]}
      height={359}
      fileName={file_name}
      alttext={alt_text}
      loading={"lazy"}
    />
  );
}
