export default function ProjectCard({ projeto }) {
  const cls = projeto.status.toLowerCase().replace(/\s/g, "-");
  return (
    <article className="card">
      <span className={`tag ${cls}`}>{projeto.status}</span>
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
    </article>
  );
}
