import ProductCard from "../components/ProductCard";
import { arrivals, bestsellers, discountOffers } from "../lib/products";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <span className="badge">Yetl Studio</span>
        <h1>Yetl: Elevated essentials for modern wardrobes.</h1>
        <p>
          Scroll through curated bestsellers, fresh arrivals, and limited-time
          offers. Build your cart, save favorites, and checkout with Stripe.
        </p>
      </section>

      <section className="section">
        <h2>Bestsellers</h2>
        <div className="card-grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>New Arrivals</h2>
        <div className="card-grid">
          {arrivals.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Discount Offers</h2>
        <div className="card-grid">
          {discountOffers.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
