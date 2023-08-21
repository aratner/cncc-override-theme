import Card from "../Card";

type GridBlockProps = {
  preview_products: {
    data: Array<{
      // Specify the structure of the data object
      id: number;
      attributes: {
        product_name: string;
        product_description: string;
        product_link: string;
        product_image: string;
      };
    }>;
  };
};

export default function GridBlock({ preview_products }: GridBlockProps) {
  const products = preview_products.data;

  return (
    <div className="grid auto-rows-auto grid-cols-1 place-items-center gap-10 p-4 sm:p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
