import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const plants = [
  {
    id: 1,
    name: 'Lavender',
    category: 'Aromatic',
    price: 12.99,
    description: 'Calming fragrance, perfect for relaxation',
    image: '/assets/lavender.jpg'
  },
  {
    id: 2,
    name: 'Peppermint',
    category: 'Aromatic',
    price: 9.99,
    description: 'Refreshing mint for teas and aromatherapy',
    image: '/assets/mint.jpg'
  },
  {
    id: 3,
    name: 'Aloe Vera',
    category: 'Medicinal',
    price: 14.99,
    description: 'Natural healing properties for skin care',
    image: '/assets/aloe.jpg'
  },
  {
    id: 4,
    name: 'Holy Basil',
    category: 'Medicinal',
    price: 11.99,
    description: 'Stress-relieving adaptogenic herb',
    image: '/assets/basil.jpg'
  }
];

export default function Products() {
  const dispatch = useDispatch();

  const renderCategory = (category) => (
    <div key={category}>
      <h2 className="mt-4 mb-3">{category} Plants</h2>
      <div className="row">
        {plants.filter(p => p.category === category).map(plant => (
          <div className="col-md-6 col-lg-4 mb-4" key={plant.id}>
            <div className="card h-100">
              <img 
                src={plant.image} 
                className="card-img-top"
                alt={plant.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{plant.name}</h5>
                <p className="card-text">{plant.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 text-success">${plant.price}</span>
                  <button 
                    className="btn btn-success"
                    onClick={() => dispatch(addItem(plant))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container py-4">
      {['Aromatic', 'Medicinal'].map(renderCategory)}
    </div>
  );
}