const ShopProductInfo = ({img,name,price}) => {
  return (
    <div className="info-container">
    <img src={img} alt={name} />
    <div className="info">
        <p>{name}</p>
        <p>{price}</p>
    </div>
    <div className="button-container">
        <button className="btn">Add To Cart</button>
    </div>
</div>
  )
}
export default ShopProductInfo