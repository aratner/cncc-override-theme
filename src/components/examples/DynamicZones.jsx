import { useStore } from "@nanostores/react";
import { $data } from "../stores/PreviewStore";
import HeroBlock from "./blocks/HeroBlock.jsx";
import CopyBlock from "./blocks/CopyBlock.jsx";
import GridBlock from "./blocks/GridBlock.jsx";

const components = {
  "blocks.hero-image": HeroBlock,
  "blocks.copy": CopyBlock,
  "blocks.product-grid": GridBlock,
};

export default function DynamicZone() {
  const layout = useStore($data);
  return (
    <>
      <header>
        <h1 class="text-6xl pt-8 text-center font-sans font-base tracking-tight">
          {layout.title && layout.title}
        </h1>
      </header>
      {layout.block_editor &&
        layout.block_editor.map((block, index) => {
          const Component = components[block.__component];
          return <Component key={index} {...block} />;
        })}
    </>
  );
}
