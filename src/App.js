import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <main className="py-4">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;