import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, incrementQuantity, decrementQuantity } from '../features/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Your Shopping Cart</h2>
      
      {items.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty</p>
          <Link to="/products" className="btn btn-success">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {items.map(item => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                    style={{ height: '150px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="text-muted">${item.price} each</p>
                      </div>
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={() => dispatch(removeItem(item.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <span className="fs-5">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                      <span className="ms-3 fs-5">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
            <div className="mt-3">
              <Link to="/products" className="btn btn-outline-success">
                Continue Shopping
              </Link>
              <button className="btn btn-success ms-2">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}