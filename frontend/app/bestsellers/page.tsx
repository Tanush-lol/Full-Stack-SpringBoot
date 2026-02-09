import { bestsellers } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

export default function BestsellersPage() {
  return (
    <div>
      <h1>Bestsellers</h1>
      <p>Top-performing Yetl essentials loved by the community.</p>
      <div className="section">
        <div className="card-grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
