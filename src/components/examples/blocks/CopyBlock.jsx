import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CopyBlock({ copy }) {
  return (
    <ReactMarkdown
      className="text-center max-w-xl mx-auto font-sans text-sm font-normal py-8"
      children={copy}
      remarkPlugins={[remarkGfm]}
    />
  );
}
