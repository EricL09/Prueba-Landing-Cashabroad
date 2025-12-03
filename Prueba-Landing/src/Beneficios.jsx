import React from 'react';
import './css/Beneficios.css';

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
  </svg>
);

const ExchangeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
  </svg>
);

export default function Beneficios() {
  const beneficios = [
    {
      id: 1,
      icon: <RocketIcon />,
      titulo: 'Pagos Rápidos',
      descripcion: 'Transacciones instantáneas y seguras en tiempo real'
    },
    {
      id: 2,
      icon: <ExchangeIcon />,
      titulo: 'Conversión MXN a USDC',
      descripcion: 'Convierte pesos mexicanos a USDC con las mejores tasas'
    },
    {
      id: 3,
      icon: <ShieldIcon />,
      titulo: 'Seguridad Garantizada',
      descripcion: 'Protege tus fondos con tecnología blockchain de última generación'
    }
  ];

  return (
    <section className="beneficios-section">
      <div className="beneficios-container">
        <h2 className="beneficios-titulo">Nuestros Beneficios</h2>
        <p className="beneficios-subtitulo">Disfruta de las ventajas que Cashabroad te ofrece</p>
        
        <div className="beneficios-grid">
          {beneficios.map((beneficio) => (
            <div key={beneficio.id} className="beneficio-card">
              <div className="beneficio-icon">
                {beneficio.icon}
              </div>
              <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
              <p className="beneficio-descripcion">{beneficio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}