
import { createBrowserRouter } from 'react-router-dom'
import Header from './componentes/Header';
import Coin from './pages/Coin';
import Home from './pages/Home';
import Favorites from './pages/Favorites'

const Router = createBrowserRouter(
  {
      path: '/',
      element: <Header />,
      children: [
          {path:'/', element: <Home/>},
          {path:'/coin/:id', element: <Coin/>},
          {path:'/favorites', element: <Favorites/>},
      ]
  }
)

export default Router;