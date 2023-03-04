import './ShortCard.css'

function ShortProductCard({img,name,price,qty}) {
  return (
    <div className="review-delivery">
        <div className="delivery-product">
          <div className="delivery-img">
            <img src={img} alt="product" />
          </div>
          <div>
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <div>Quantity: {qty}</div>
          </div>
        </div>
      </div>
  );
}

export default ShortProductCard;
