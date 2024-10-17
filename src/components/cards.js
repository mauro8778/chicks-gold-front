import { FaShoppingCart, FaClock } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/cards.css';

const Card = ({ title, description, imgSrc, onSale, price, originalPrice }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const truncateDescription = (desc, maxLength) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + "...";
    }
    return desc;
  };

  return (
    <div className="card">
      {onSale && (
        <div className="mini-card on-sale">
          <span className="green-dot"></span>
          <span>ON SALE</span>
        </div>
      )}

      <div className="mini-card">
        <span>In Stock</span>
        <FaClock className="icon" />
      </div>

      <div className="counter">
        <span className="quantity">{quantity}</span>
        <div className="counter-controls">
          <button className="counter-button up" onClick={increaseQuantity}>▲</button>
          <button className="counter-button down" onClick={decreaseQuantity}>▼</button>
        </div>
      </div>

      <div className="img-cards">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="card-info">
        <div>
        <h2 className="title">{title}</h2>
        </div>
        <div>
        <p className="price-container">
          <span className="price">{price}</span>
          {onSale && <span className="original-price">{originalPrice}</span>}
        </p>
        </div>
        <div>
        <p className="description" title={description}>
          {truncateDescription(description, 62)}
        </p>
        </div>
        
      </div>

      <div className="button-container">
        <button className="details-button">DETAILS</button>
        <button className="add-button">
          ADD
          <div className="addcart-icon">
            <FaShoppingCart size={16} color="white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
