import { useState, useEffect, useRef } from 'react';
import './css/Header.css';
import logoCasha from "./assets/img/logoCasha.png";
import LoginSignupForm from './LoginSignupForm';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="header">
            <img src={logoCasha} alt="Logo Casha" />
            
            <div className="dropdown" ref={dropdownRef}>
                <button onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: '#007bff', color : 'white' }}>
                    Get Started
                </button>
                
                {isOpen && (
                    <div className="dropdown-menu">
                        <a href="#signin" onClick={() => { setShowForm(true); setIsOpen(false); }}>Sign In</a>
                        <a href="#signup" onClick={() => { setShowForm(true); setIsOpen(false); }}>Sign Up</a>
                        <div className="dropdown-divider"></div>
                        <a href="#help">Help & Support</a>
                    </div>
                )}
            </div>

            <LoginSignupForm isOpen={showForm} onClose={() => setShowForm(false)} />
        </div>
    );
}

export default Header;