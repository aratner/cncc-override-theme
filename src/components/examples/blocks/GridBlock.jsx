import Card from "../Card";

export default function GridBlock({ preview_products }) {
  const products = preview_products.data;

  return (
    <div className="grid place-items-center grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 auto-rows-auto gap-10 p-4 sm:p-10">
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
