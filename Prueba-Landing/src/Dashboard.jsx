import React, { useState } from 'react';
import './css/Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = {
    all: [
      { id: 1, name: 'Transferencias Internacionales', image: '💳', description: 'Envíos seguros a más de 150 países' },
      { id: 2, name: 'Billetera Digital', image: '💰', description: 'Gestiona tu dinero en tiempo real' },
      { id: 3, name: 'Cambio de Divisas', image: '💱', description: 'Tasas competitivas 24/7' },
      { id: 4, name: 'Pagos Móviles', image: '📱', description: 'Paga desde tu celular fácilmente' },
    ],
    transfers: [
      { id: 1, name: 'Transferencias Internacionales', image: '💳', description: 'Envíos seguros a más de 150 países' },
    ],
    wallet: [
      { id: 2, name: 'Billetera Digital', image: '💰', description: 'Gestiona tu dinero en tiempo real' },
    ],
    exchange: [
      { id: 3, name: 'Cambio de Divisas', image: '💱', description: 'Tasas competitivas 24/7' },
      { id: 4, name: 'Pagos Móviles', image: '📱', description: 'Paga desde tu celular fácilmente' },
    ],
  };

  const displayedProducts = products[activeTab] || products.all;
  const sliderProducts = displayedProducts.slice(currentSlide, currentSlide + 2);

  const handleNextSlide = () => {
    if (currentSlide + 2 < displayedProducts.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <h2>Nuestros Servicios</h2>
        <p className="subtitle">Explora nuestras soluciones financieras innovadoras</p>

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => { setActiveTab('all'); setCurrentSlide(0); }}
          >
            Todos
          </button>
          <button
            className={`tab-button ${activeTab === 'transfers' ? 'active' : ''}`}
            onClick={() => { setActiveTab('transfers'); setCurrentSlide(0); }}
          >
            Transferencias
          </button>
          <button
            className={`tab-button ${activeTab === 'wallet' ? 'active' : ''}`}
            onClick={() => { setActiveTab('wallet'); setCurrentSlide(0); }}
          >
            Billetera
          </button>
          <button
            className={`tab-button ${activeTab === 'exchange' ? 'active' : ''}`}
            onClick={() => { setActiveTab('exchange'); setCurrentSlide(0); }}
          >
            Cambio
          </button>
        </div>

        <div className="slider-wrapper">
          <button className="slider-button prev" onClick={handlePrevSlide} disabled={currentSlide === 0}>
            ❮
          </button>
          
          <div className="products-grid">
            {sliderProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-icon">{product.image}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className="card-button">Conocer más</button>
              </div>
            ))}
          </div>

          <button 
            className="slider-button next" 
            onClick={handleNextSlide} 
            disabled={currentSlide + 2 >= displayedProducts.length}
          >
            ❯
          </button>
        </div>

        <div className="slide-indicators">
          {Array.from({ length: Math.ceil(displayedProducts.length / 2) }).map((_, idx) => (
            <span
              key={idx}
              className={`indicator ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
