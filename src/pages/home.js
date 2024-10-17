import React, { useEffect } from 'react';
import Card from '../components/cards.js';
import Footer from '../components/footer';
import Navbar from '../components/navbar.js';
import cards from '../data/mockcards.js'; // Asegúrate de que este array no tenga duplicados
import CheckoutSection from '../components/CheckoutSection.js';
import '../styles/home.css';

const Home = () => {
  const cardsPerPage = 15;

  // Recupera el número de página del localStorage o establece 1 por defecto
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []); // Solo se ejecuta una vez cuando se monta el componente

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem('currentPage', pageNumber); // Guarda la página actual
  };

  // Imprimir contenido actual de las tarjetas y la página actual para depuración
  console.log('Current Page:', currentPage);
  console.log('Current Cards:', currentCards);

  return (
    <div className='home'>
      <Navbar />
      <div className="background-image-container">
        <img src="/ors.jpg" alt="Background" className="background-image" />
      </div>

      <div className="home-container">
        <div className="filter-card">
          <div className="filter-section">
            <div className="filter-left">
              <img src="/filtrar.png" alt="Filtro" className="filter-icon" />
              <div className="filter-text">
                <span>By Sort</span>
                <span className="featured-label">Featured</span>
              </div>
            </div>
            <div className="filter-right">
              <select className="sort-dropdown">
                {/* Opciones para el dropdown */}
              </select>
            </div>
          </div>
        </div>

        <div className={`cards-wrapper ${currentCards.length < 3 ? 'few-cards' : ''}`}>
  {currentCards.map((card, index) => (
    <Card
      key={`${card.id}-${index}`}
      title={card.title}
      price={card.price}
      originalPrice={card.originalPrice}
      description={card.description}
      imgSrc={card.imgSrc}
      onSale={card.onSale}
    />
  ))}
</div>


        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="next-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
      <CheckoutSection />
      <Footer />
    </div>
  );
};

export default Home;
