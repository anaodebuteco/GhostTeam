export default function ProjectCard({ projeto, onOpen }) {
  const cls = projeto.status.toLowerCase().replace(/\s/g, "-");
  return (
    <article className="card clicavel" onClick={() => onOpen(projeto.id)}>
      <span className={`tag ${cls}`}>{projeto.status}</span>
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
    </article>
  );
}
