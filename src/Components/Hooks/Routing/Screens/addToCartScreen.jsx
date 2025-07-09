import { useContext } from "react";
import { cartInfo } from "../Navigations/NavigateComp";
import NavBar from "../Navbar";

const AddToCartScreen = () => {
  const { cartProducts, cartActionRemove } = useContext(cartInfo);

  const removingProductFromCart = (id) => {
    cartActionRemove(id);
  };

  return (
    <>
      <NavBar />
      {cartProducts.length === 0 ? (
        <>
          <h3>No Products Added</h3>
        </>
      ) : (
        cartProducts.map((eachProduct, index) => {
          const { id, title, image } = eachProduct;
          return (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <h4>{index + 1}</h4>
              <img src={image} height={200} width={200} />
              <h4>{title}</h4>
              <button onClick={() => removingProductFromCart(id)}>
                Remove
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default AddToCartScreen;
