import ShopProductInfo from "../shop.product-info/shop.product-info.component"
import ShopProductType from "../shop.product-type/shop.product-type.component"
import "../shopping.styles.scss"

const Womens = ({products}) => {
    const ceket = []
    let sorgu = "Womens"
    products.forEach((product) => {
        if(product.type === sorgu){
            ceket.push(<ShopProductType type = {product.type}/>)
            sorgu = null
        }
        if(product.type === "Womens"){
            ceket.push(<ShopProductInfo  name = {product.name} price = {product.price} img = {product.img}/>)
        }
    })
  return (
    <div className="container">{ceket}</div>
  )
}
export default Womens