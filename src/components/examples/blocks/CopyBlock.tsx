import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type CopyBlockProps = {
  copy: string;
};

export default function CopyBlock({ copy }: CopyBlockProps) {
  return (
    <ReactMarkdown
      className="mx-auto max-w-xl py-8 text-center font-sans text-sm font-normal"
      children={copy}
      remarkPlugins={[remarkGfm]}
    />
  );
}
