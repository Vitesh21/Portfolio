import React from 'react';
import './styles.scss';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="loader-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-dot"></div>
                </div>
                <div className="loader-text">
                    <span className="letter" style={{ animationDelay: '0s' }}>L</span>
                    <span className="letter" style={{ animationDelay: '0.1s' }}>o</span>
                    <span className="letter" style={{ animationDelay: '0.2s' }}>a</span>
                    <span className="letter" style={{ animationDelay: '0.3s' }}>d</span>
                    <span className="letter" style={{ animationDelay: '0.4s' }}>i</span>
                    <span className="letter" style={{ animationDelay: '0.5s' }}>n</span>
                    <span className="letter" style={{ animationDelay: '0.6s' }}>g</span>
                    <span className="dots">
                        <span style={{ animationDelay: '0.7s' }}>.</span>
                        <span style={{ animationDelay: '0.8s' }}>.</span>
                        <span style={{ animationDelay: '0.9s' }}>.</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
