import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function Header() {
  return (
 <>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    <Outlet />
    </>
  );
}

export default Header;