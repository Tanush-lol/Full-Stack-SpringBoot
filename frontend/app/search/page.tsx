import { bestsellers, arrivals } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

const products = [...bestsellers, ...arrivals];

export default function SearchPage() {
  return (
    <div>
      <h1>Search</h1>
      <p>Search items by name and quickly add them to cart or wishlist.</p>
      <div className="card">
        <label htmlFor="search">Product name</label>
        <input
          id="search"
          type="search"
          placeholder="Search Yetl pieces"
          style={{ padding: "0.75rem", borderRadius: "0.75rem", border: "1px solid #ddd" }}
        />
      </div>
      <section className="section">
        <h2>Results</h2>
        <div className="card-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
