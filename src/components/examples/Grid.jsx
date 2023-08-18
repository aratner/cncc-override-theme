import { useStore } from "@nanostores/react";
import { $data } from "../stores/PreviewStore";
import Card from "./Card";

export default function Grid(props) {
  const products = useStore($data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-auto gap-10 p-10">
      {products &&
        products.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.attributes.product_name}
              description={item.attributes.product_description}
              link={item.attributes.product_link}
              image={item.attributes.product_image}
            />
          );
        })}
    </div>
  );
}
