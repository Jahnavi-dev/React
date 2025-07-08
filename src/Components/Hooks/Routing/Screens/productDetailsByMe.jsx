import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage=()=>{
    // const urlParams=useParams()
    // console.log("useParams", urlParams)
    const {productId}=useParams()
    const [product, setProduct]=useState({})
    

    useEffect(()=>{
        fetchProductData()
    },[productId])

    const fetchProductData=async ()=>{
        // const res=await axios.get(`https://fakestoreapi.com/products/${urlParams.productId}`)
        const res=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        console.log(res);
        setProduct(res.data);

    }


    return(
        <>
        <h2>ProductDetailPage</h2>
        {product=={}?<h3>Product Details Loading</h3>:
        <h3>{product.title}</h3>}

        </>
    )
}

export default ProductDetailPage;