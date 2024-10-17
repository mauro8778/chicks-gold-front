import React from 'react';
import Card from '../components/cards.js';
import Footer from '../components/footer';
import Navbar from '../components/navbar.js';
import cards from '../data/mockcards.js';
import CheckoutSection from '../components/CheckoutSection.js';
import '../styles/home.css';

const Home = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const cardsPerPage = 15;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(cards.length / cardsPerPage);

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

            </select>
          </div>
        </div>
      </div>

        <div className="cards-wrapper">
          {currentCards.map((card) => (
            <Card
              key={card.id}
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
