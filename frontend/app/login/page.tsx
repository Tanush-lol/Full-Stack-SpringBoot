export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>Access your Yetl account with email and password.</p>
      <div className="card">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@yetl.com"
          style={{ padding: "0.75rem", borderRadius: "0.75rem", border: "1px solid #ddd" }}
        />
        <label htmlFor="password" style={{ marginTop: "1rem" }}>
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          style={{ padding: "0.75rem", borderRadius: "0.75rem", border: "1px solid #ddd" }}
        />
        <div className="actions" style={{ marginTop: "1rem" }}>
          <button>Login</button>
          <button className="secondary">Create account</button>
        </div>
      </div>
    </div>
  );
}
