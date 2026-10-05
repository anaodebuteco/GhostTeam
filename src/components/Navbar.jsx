export default function Navbar({ abas, atual, onChange }) {
  return (
    <header className="navbar">
      <div className="logo">👻 GhostTeam</div>
      <nav>
        {abas.map((a) => (
          <button key={a.id} className={atual === a.id ? "ativo" : ""} onClick={() => onChange(a.id)}>
            {a.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
