import { collections, bestsellers } from "../../lib/products";
import ProductCard from "../../components/ProductCard";

export default function CollectionsPage() {
  return (
    <div>
      <h1>Collections</h1>
      <p>
        Explore curated styles from gothic to luxury. Each collection highlights
        signature Yetl silhouettes.
      </p>
      <div className="section">
        <div className="card-grid">
          {collections.map((collection) => (
            <div className="card" key={collection}>
              <span className="badge">{collection}</span>
              <h3>{collection} Edit</h3>
              <p>Signature palette and styling suggestions.</p>
              <button>Browse {collection}</button>
            </div>
          ))}
        </div>
      </div>
      <section className="section">
        <h2>Featured items</h2>
        <div className="card-grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
