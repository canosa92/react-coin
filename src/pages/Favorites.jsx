import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = () => {
      const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(favoritesFromStorage);
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Cryptos Favoritas</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(favorite => (
            <li key={favorite}>
              <Link to={`/coin/${favorite}`}>{favorite}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>sin crypto favorita</p>
      )}
    </div>
  );
}

export default Favorites;