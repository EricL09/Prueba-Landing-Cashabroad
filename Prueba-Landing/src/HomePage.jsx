import React, { useState } from 'react';
import './css/HomePage.css';

const EXCHANGE_RATE = 18.5;

function HomePage() {
    const [isMxnToUsdc, setIsMxnToUsdc] = useState(true);
    const [inputAmount, setInputAmount] = useState('');
    const [resultAmount, setResultAmount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const calculateConversion = (amount, convertMxnToUsdc) => {
        if (isNaN(amount) || amount <= 0) {
            return 0;
        }
        return convertMxnToUsdc ? (amount / EXCHANGE_RATE).toFixed(2) : (amount * EXCHANGE_RATE).toFixed(2);
    };

    const handleAmountChange = (event) => {
        const value = event.target.value;
        setInputAmount(value);
        const amount = parseFloat(value);
        setResultAmount(calculateConversion(amount, isMxnToUsdc));
    };

    const toggleConversionDirection = () => {
        setIsMxnToUsdc(prev => !prev);
        const amount = parseFloat(inputAmount);
        setResultAmount(calculateConversion(amount, !isMxnToUsdc));
    };

    const inputCurrency = isMxnToUsdc ? 'MXN' : 'USDC';
    const outputCurrency = isMxnToUsdc ? 'USDC' : 'MXN';

    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Conversiones de MXN a USDC
                    </h1>

                    <p className="hero-subtitle">
                        La forma más rápida, segura y económica de mover tu dinero a moneda estable se encuentra en CashAbroad.
                    </p>

                    <button 
                        style={{ backgroundColor: '#007bff', color: 'white', width: '100%' }}
                        onClick={() => setShowModal(true)}
                    >
                        Como funciona
                    </button>
                </div>

                <div className="hero-conversion-card">
                    <h2 className="card-title">Conversor MXN/USDC</h2>
                    <div className="conversion-inputs">

                        <div className="input-group">
                            <label htmlFor="input-amount">Monto en {inputCurrency}:</label>
                            <input
                                id="input-amount"
                                type="number"
                                placeholder={`Ingresa ${inputCurrency}`}
                                value={inputAmount}
                                onChange={handleAmountChange}
                                className="input-field"
                            />
                        </div>

                        <button
                            onClick={toggleConversionDirection}
                            className="swap-button"
                            title="Invertir conversión"
                        >
                            ⇄
                        </button>

                        <div className="input-group">
                            <label>Recibirás en {outputCurrency}:</label>
                            <input
                                type="text"
                                value={resultAmount}
                                className="input-field result-field"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="currency-values-display">
                        <div className="currency-value-item">
                            <span className="currency-value-label">1 {inputCurrency}</span>
                            <span className="currency-value-amount">
                                {isMxnToUsdc ? (1 / EXCHANGE_RATE).toFixed(4) : EXCHANGE_RATE} {outputCurrency}
                            </span>
                        </div>
                        <div className="currency-value-item">
                            <span className="currency-value-label">1 {outputCurrency}</span>
                            <span className="currency-value-amount">
                                {isMxnToUsdc ? EXCHANGE_RATE : (1 / EXCHANGE_RATE).toFixed(4)} {inputCurrency}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
                        <h2>¿Cómo funciona?</h2>
                        <p>Nuestro simulador de conversión te permite calcular rápidamente cuántos USDC recibirás por tus MXN, o viceversa.</p>
                        <ul>
                            <li><strong>Ingresa un monto:</strong> Escribe la cantidad de dinero que deseas convertir.</li>
                            <li><strong>Conversión automática:</strong> El simulador calcula instantáneamente el equivalente usando la tasa de cambio actual.</li>
                            <li><strong>Intercambia direcciones:</strong> Usa el botón ⇄ para cambiar entre MXN → USDC o USDC → MXN.</li>
                            <li><strong>Tasa de cambio:</strong> Utilizamos una tasa fija de {EXCHANGE_RATE} MXN = 1 USDC para precisión en tus cálculos.</li>
                        </ul>
                        <p className="modal-footer">Realiza transacciones seguras y económicas con Cashabroad.</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default HomePage;