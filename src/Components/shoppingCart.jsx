function ShoppingCart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Der Warenkorb ist leer.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx}>
                {item.title} – {item.price} €
                <button
                  onClick={() => onRemoveFromCart(idx)}
                  style={{ marginLeft: "10px" }}
                >
                  Entfernen
                </button>
              </li>
            ))}
          </ul>
          <div className="cartTotal">
            <strong>Gesamtsumme: {total.toFixed(2)} €</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;