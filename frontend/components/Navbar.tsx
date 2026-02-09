import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <strong>Yetl</strong>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/bestsellers">Bestsellers</Link>
        <Link href="/search">Search</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/wishlist">Wishlist</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
