import { Routes, Route , Link} from "react-router-dom";
import ProductSale from "../../components/product-sale/product.sale.component";


const Shop = ({products}) => {
  return <ProductSale products = {products}/>;
};

export default Shop;
