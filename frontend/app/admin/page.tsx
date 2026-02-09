export default function AdminPage() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>
        Monitor inventory, shipped status, and revenue for Yetl products in one
        place.
      </p>
      <section className="section">
        <h2>Inventory Snapshot</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Stock left</th>
              <th>Shipped</th>
              <th>Received</th>
              <th>Manufacturing Cost</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eclipse Trench</td>
              <td>42</td>
              <td>24</td>
              <td>18</td>
              <td>$6,800</td>
              <td className="highlight">$5,600</td>
            </tr>
            <tr>
              <td>Lumen Corset</td>
              <td>30</td>
              <td>18</td>
              <td>12</td>
              <td>$4,200</td>
              <td className="highlight">$7,200</td>
            </tr>
            <tr>
              <td>Imperial Silk Coat</td>
              <td>12</td>
              <td>8</td>
              <td>4</td>
              <td>$5,100</td>
              <td className="highlight">$8,200</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="section">
        <h2>Revenue Panel</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Net Profit</h3>
            <p className="highlight">$23,100</p>
            <p>Across 342 orders this month.</p>
          </div>
          <div className="card">
            <h3>Best Selling Product</h3>
            <p>Eclipse Trench</p>
            <p>88 units sold</p>
          </div>
          <div className="card">
            <h3>Top Collection</h3>
            <p>Monochromatic</p>
            <p>45% of total sales</p>
          </div>
        </div>
      </section>
    </div>
  );
}
