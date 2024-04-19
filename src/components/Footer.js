// Footer.js
// Footer.js
import React from 'react';
import iconImage from '../assets/sun.png'; // Importez l'image de l'icône depuis votre dossier

function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <img src={iconImage} alt="Icon" style={{ width: '50px', height: '50px' }} />
        <p>Weather App &copy; 2024</p>
        <p>Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a></p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '3rem',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export default Footer;
