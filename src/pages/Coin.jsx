import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Coin() {
  const { id } = useParams();
  const [cryptoInfo, setCryptoInfo] = useState(null);

  useEffect(() => {
    const fetchCryptoInfo = async () => {
      try {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
        const data = response.data.data;
        setCryptoInfo(data);
      } catch (error) {
        console.error('Error fetching cryptocurrency info:', error);
      }
    };

    fetchCryptoInfo();
  }, [id]);

  const renderCryptoInfo = () => {
    if (!cryptoInfo) {
      return <p>Cargando...</p>;
    }

    return (
      <div>
        <h2>{cryptoInfo.name}</h2>
        <p>Symbol: {cryptoInfo.symbol}</p>
        <p>Rank: {cryptoInfo.rank}</p>
        <p>Price USD: ${parseFloat(cryptoInfo.priceUsd).toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>Detalles de la Crypto</h2>
      {renderCryptoInfo()}
    </div>
  );
}

export default Coin;