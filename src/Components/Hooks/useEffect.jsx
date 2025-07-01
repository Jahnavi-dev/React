import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);
  const [eachProduct, setEachProduct] = useState({});

  useEffect(() => {
    console.log("useEffect");
    fetchData();
    document.title = `Counter ${counter}`;
  }, []);

  useEffect(() => {
    document.title = `Counter ${counter}`;
    fetchEachProduct();
  }, [counter]);

  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result);
    if (result.status === 200) {
      setProducts(result.data);
    }
  };

  const fetchEachProduct = async () => {
    const result = await axios.get(
      `https://fakestoreapi.com/products/${counter}`
    );
    console.log(result);
    if (result.status === 200) {
      setEachProduct(result.data);
    }
  };

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h3>UseEffect Hook</h3>
      <h3>{counter}</h3>
      <button onClick={counterHandler}>Increment</button>
      {/* {products.length > 0 ? (
        products.map((eachProduct) => {
          const { id, title } = eachProduct;
          return (
            <React.Fragment key={id}>
              <h5>{title}</h5>
            </React.Fragment>
          );
        })
      ) : (
        <h3>Products not fetched properly</h3>
      )} */}
      {eachProduct !== {} ? (
        <h5>{eachProduct.title}</h5>
      ) : (
        products.map((eachProduct) => {
          const { id, title } = eachProduct;
          return (
            <React.Fragment key={id}>
              <h5>{title}</h5>
            </React.Fragment>
          );
        })
      )}
    </>
  );
};
export default UseEffectComp;
