import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets/');
        const cryptoData = response.data.data; 
        setCryptos(cryptoData); 
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchCryptos(); 
  }, []); 

  const addToFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      
    } else {

    }
  };

  return (
    <div>
      <h2>Top Cryptos</h2>
      <ul>
        {cryptos.map(crypto => (
          <li key={crypto.id}>
            <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
            <button onClick={() => addToFavorites(crypto.id)}>Agregar a Favoritos</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;