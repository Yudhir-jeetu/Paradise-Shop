import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 mb-4">Welcome to Paradise Nursery</h1>
      <p className="lead mb-4">Discover our collection of aromatic and medicinal plants</p>
      <Link to="/products" className="btn btn-success btn-lg">
        Browse Plants
      </Link>
    </div>
  );
}