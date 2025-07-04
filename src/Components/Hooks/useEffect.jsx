import axios from "axios";
import React, { useEffect, useState } from "react";
import { checkObjectEmpty } from "./Utills/jsFuncts";

const UseEffectComp = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);
  const [eachProduct, setEachProduct] = useState({});

  // useEffect will trigger once to fetch data
  useEffect(() => {
    console.log("useEffect");
    fetchData();
    document.title = `Counter ${counter}`;
  }, []);

  //To fetch all todos from server
  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result);
    if (result.status === 200) {
      setProducts(result.data);
    }
  };

  // useEffect will trigger every time when an array value changes
  useEffect(() => {
    document.title = `Counter ${counter}`;
    fetchEachProduct();
  }, [counter]);

  //this will fetch data based on current counter value
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
      {!checkObjectEmpty(eachProduct) ? (
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
