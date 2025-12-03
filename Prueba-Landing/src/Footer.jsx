import React from 'react';
import './css/Footer.css';
import logoCasha from "./assets/img/logoCasha.png";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M23.953 4.57a10 10 0 002.856-3.915 9.953 9.953 0 01-2.8.856 4.958 4.958 0 0021.67-4.618c-.885.469-1.830.775-2.829.9a4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.439-.103.249-.129.597-.129.946v5.42h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.432 0 4.261 1.59 4.261 5.004v4.736zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.915.762 1.915 1.715 0 .953-.728 1.715-1.958 1.715zm1.581 11.597H3.756V9.938h3.162v10.514zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a4 4 0 110 8 4 4 0 010-8zm6 2.5a1 1 0 11-2 0 1 1 0 012 0zM12 20a5.333 5.333 0 110-10.666A5.333 5.333 0 0112 20z" clipRule="evenodd" fillRule="evenodd"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <div className="footer-logo">
            <img src={logoCasha} alt="CashAbroad Logo" />
          </div>
          <p className="logo-description">
            Soluciones financieras globales al alcance de tu mano. Transferencias rápidas, seguras y confiables.
          </p>
        </div>

        <div className="footer-section">
          <h4>Producto</h4>
          <ul>
            <li><a href="#transferencias">Transferencias</a></li>
            <li><a href="#billetera">Billetera Digital</a></li>
            <li><a href="#cambio">Cambio de Divisas</a></li>
            <li><a href="#pagos">Pagos Móviles</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#about">Acerca de Nosotros</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Carreras</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacidad</a></li>
            <li><a href="#terms">Términos de Servicio</a></li>
            <li><a href="#cookies">Política de Cookies</a></li>
            <li><a href="#compliance">Cumplimiento</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#facebook" className="social-icon facebook" title="Facebook" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#twitter" className="social-icon twitter" title="Twitter" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#linkedin" className="social-icon linkedin" title="LinkedIn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#instagram" className="social-icon instagram" title="Instagram" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CashAbroad. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ para facilitar tus transacciones globales</p>
      </div>
    </footer>
  );
};

export default Footer;
