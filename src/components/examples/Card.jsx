import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PictureResponsive from "./PictureResponsive";

export default function Card({ name, description, link, image }) {
  const regexID = /\/photos\/([a-f0-9]+)\//;
  const regexDomain = /^https?:\/\/([^/]+)/;
  return (
    <a
      className="group max-w-xs text-center bg-white drop-shadow-xl rounded-xl overflow-hidden border-black border-[1px]"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <PictureResponsive
        imageType="fixed"
        containerClass="block aspect-square overflow-hidden p-4"
        childClass="w-full h-full object-cover object-center"
        domain={regexDomain.exec(image)[1]}
        copilotid={regexID.exec(image)[1]}
        width={284}
        fileName={"glamour-products"}
        alttext={"This is some alt text"}
        loading={"lazy"}
      />
      <div className="">
        <h2 className="text-sm pb-2 font-medium font-sans pl-4 pr-4">{name}</h2>
        <ReactMarkdown
          className="text-xs font-sans pl-8 pr-8 pb-8 pt-2 font-light"
          children={description}
          remarkPlugins={[remarkGfm]}
        />
        <span className="block font-sans text-xs bg-black text-white p-3 font-medium transition duration-150 ease-in group-hover:bg-violet-600">
          SHOP NOW
        </span>
      </div>
    </a>
  );
}
