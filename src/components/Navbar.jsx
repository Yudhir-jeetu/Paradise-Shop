import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartCount = useSelector(state => 
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">🌿 Paradise Nursery</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Plants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}