import { useEffect, useState } from "react";
import Card from "./Card";

export default function PreviewGrid() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://10.0.2.48:1337/api/products");
    const products = await response.json();
    setData(products.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 p-10">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.attributes.product_image}
              name={item.attributes.product_name}
              price={item.attributes.product_price}
              link={item.attributes.product_link}
            />
          );
        })}
    </div>
  );
}
