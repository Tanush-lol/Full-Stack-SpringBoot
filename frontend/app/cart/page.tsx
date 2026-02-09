export default function CartPage() {
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Review items, adjust quantities, and proceed to checkout.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eclipse Trench</td>
            <td>
              <div className="actions">
                <button className="secondary">-</button>
                <span>1</span>
                <button className="secondary">+</button>
              </div>
            </td>
            <td>$189</td>
            <td>$189</td>
          </tr>
          <tr>
            <td>Nova Trousers</td>
            <td>
              <div className="actions">
                <button className="secondary">-</button>
                <span>2</span>
                <button className="secondary">+</button>
              </div>
            </td>
            <td>$149</td>
            <td>$298</td>
          </tr>
        </tbody>
      </table>
      <div className="section">
        <h2>Total: $487</h2>
        <button>Checkout with Stripe</button>
      </div>
    </div>
  );
}
