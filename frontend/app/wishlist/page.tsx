import { bestsellers } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

export default function WishlistPage() {
  return (
    <div>
      <h1>Wishlist</h1>
      <p>Items you've liked across Yetl collections.</p>
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
