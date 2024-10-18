import React from 'react';
import '../styles/checkout.css'; 

const CheckoutSection = () => {
  return (
    <div className="checkout-section">
      
      <div className="image-container">
        <img src="/visa.png" alt="Método de Pago 1" className="payment-image" />
        <img src="/master.png" alt="Método de Pago 2" className="payment-image" />
        <img src="/american.png" alt="Método de Pago 3" className="payment-image" />
        <img src="/skril.png" alt="Método de Pago 4" className="payment-image" />
        <img src="/bitcoinv.png" alt="Método de Pago 5" className="payment-image" />
        <img src="/eterium.png" alt="Método de Pago 6" className="payment-image" />
        <img src="/bitcoin.png" alt="Método de Pago 7" className="payment-image" />
        <img src="/lite.png" alt="Método de Pago 8" className="payment-image" />
        <h2 className="checkout-title">and 50+ more</h2>
      </div>
    </div>
  );
};

export default CheckoutSection;
