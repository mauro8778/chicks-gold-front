import { FaShoppingCart, FaClock } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/cards.css';

const Card = ({ title, description, imgSrc, onSale, price, originalPrice }) => {
  // Estado para el contador de cantidad
  const [quantity, setQuantity] = useState(1);

  // Funciones para aumentar y disminuir la cantidad
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1); // Asegura que no sea menor que 1
  };

  // Función para truncar la descripción
  const truncateDescription = (desc, maxLength) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + "...";
    }
    return desc;
  };

  return (
    <div className="card">
      {/* Mini card "On Sale" en la esquina superior izquierda */}
      {onSale && (
        <div className="mini-card on-sale">
          <span className="green-dot"></span>
          <span>ON SALE</span>
        </div>
      )}

      {/* Mini card "In Stock" en la esquina superior izquierda */}
      <div className="mini-card">
        <span>In Stock</span>
        <FaClock className="icon" />
      </div>

      {/* Contador en la esquina superior derecha */}
      <div className="counter">
        <span className="quantity">{quantity}</span>
        <div className="counter-controls">
          <button className="counter-button up" onClick={increaseQuantity}>▲</button>
          <button className="counter-button down" onClick={decreaseQuantity}>▼</button>
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="img-cards">
        <img src={imgSrc} alt={title} /> {/* Asegúrate de que imgSrc esté definido */}
      </div>
      <div className="card-info">
        <h1 className="title">{title}</h1>
        <h2 className="price-container">
          <span className="price">{price}</span> {/* Precio actual a la izquierda */}
          {onSale && <span className="original-price">{originalPrice}</span>} {/* Precio original tachado a la derecha */}
        </h2>


        <p className="description" title={description}>
          {truncateDescription(description, 62)}
        </p>
      </div>
      <div className="button-container">
        <button className="details-button">DETAILS</button>
        <button className="add-button">
          ADD
          <div className="cart-icon">
            <FaShoppingCart size={16} color="white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
