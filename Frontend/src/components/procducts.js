import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./Productcard";

export const Products = () => {
  const [prodata, setprodata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        try {
          const response = await axios.get("https://dummyjson.com/products");
          console.log("list inside:", response);
          setprodata(response.data.products);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [prodata]);

  console.log("list outside:", prodata);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {prodata.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
