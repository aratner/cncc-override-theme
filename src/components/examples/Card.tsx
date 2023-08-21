import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PictureResponsive from "../PictureResponsive";

type CardProps = {
  name: string;
  description: string;
  link: string;
  image: string;
};

export default function Card({ name, description, link, image }: CardProps) {
  return (
    <a
      className="group max-w-xs overflow-hidden rounded-xl border-[1px] border-black bg-white text-center drop-shadow-xl"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <PictureResponsive
        imageType="fixed"
        containerClass="block aspect-square overflow-hidden p-4"
        childClass="w-full h-full object-cover object-center"
        copilotImageUrl={image}
        width={284}
        fileName={"glamour-products"}
        alttext={"This is some alt text"}
        loading={"lazy"}
      />
      <div className="">
        <h2 className="pb-2 pl-4 pr-4 font-sans text-sm font-medium">{name}</h2>
        <ReactMarkdown
          className="pb-8 pl-8 pr-8 pt-2 font-sans text-xs font-light"
          children={description}
          remarkPlugins={[remarkGfm]}
        />
        <span className="block bg-black p-3 font-sans text-xs font-medium text-white transition duration-150 ease-in group-hover:bg-violet-600">
          SHOP NOW
        </span>
      </div>
    </a>
  );
}
