type Product = {
  name: string;
  style: string;
  price: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
  onAdd?: () => void;
  onLike?: () => void;
};

export default function ProductCard({ product, onAdd, onLike }: ProductCardProps) {
  return (
    <div className="card">
      <span className="badge">{product.style}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{product.price}</strong>
      <div className="actions">
        <button onClick={onAdd}>Add to cart</button>
        <button className="secondary" onClick={onLike}>
          Wishlist
        </button>
      </div>
    </div>
  );
}
