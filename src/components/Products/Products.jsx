export const Product = ({ imgUrl, name, price, quantity }) => (
  <div className="profile">
    <img src={imgUrl} alt={name} width="400" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 20 ? 'Few left' : 'In stock'}</h1>
    <button type="button">Add to cart</button>
  </div>
);
