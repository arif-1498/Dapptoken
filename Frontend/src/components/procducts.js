import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./Productcard";
import {} from "react-redux"
import {  Spinner } from "react-bootstrap";


export const Products = () => {
  const [prodata, setprodata] = useState([]);
  const [loading, setLoading] =useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        try {
          const response = await axios.get("https://dummyjson.com/products");
          console.log("list inside:", response);
          setprodata(response.data.products);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  console.log("list outside:", prodata);
   
  if(loading){
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

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
