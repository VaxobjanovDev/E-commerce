import React, { useEffect, useState } from "react";
import Button from "./Button";

const Products = () => {
  const [response, setResponse] = useState([]);
  const [filter, setFilter] = useState(response);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getResponse = async () => {
    setLoading(true);
    const responses = await fetch("https://fakestoreapi.com/products");
    if (componentMounted) {
      setResponse(await responses.clone().json());
      setFilter(await responses.json());
      setLoading(false);
      console.log(filter);
    }

    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div>
      <div>
        <div className="container">
					<Button response={response} setFilter={setFilter} filter={filter} loading={loading}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
