const ProductCardCont=(props)=>{
  console.log(props);
  const {title, image, brand, model}=props;
    return(<div style={{width:"20%", padding:"10px", borderRadius:"10px", border:"2px solid lavender", display:"flex", flexDirection:"column"}}>
      <img src={image} width="100%" height={"180px"}/>
      <h6>{title}</h6>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <button style={{border:"2px solid lavender", height:"35px", width:"100px", textAlign:"center", backgroundColor:"lavender", color:"black", borderRadius:"8px", alignItems:"center"}}>Buy Now</button>
        

    </div>)
}
export default ProductCardCont;