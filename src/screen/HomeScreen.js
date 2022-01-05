import products from "../Data";
import "./HomeScreen.css";
import ProductCard from "../ComponentProduct/ProductCard";
import Dash from "../Component/Dash";

const HomeScreen = () => {
  return (
    <>
    <Dash/>
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default HomeScreen;
