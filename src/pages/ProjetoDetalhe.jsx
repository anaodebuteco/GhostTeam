export default function ProjetoDetalhe({ projeto, onBack }) {
  const cls = projeto.status.toLowerCase().replace(/\s/g, "-");
  return (
    <section>
      <button className="voltar" onClick={onBack}>← Voltar para projetos</button>
      <h1>{projeto.nome}</h1>
      <span className={`tag ${cls}`}>{projeto.status}</span>
      <p className="lead">{projeto.descricao}</p>
      <p>{projeto.detalhes}</p>
      {projeto.repo && (
        <p><a href={projeto.repo} target="_blank" rel="noreferrer">Ver no GitHub ↗</a></p>
      )}
    </section>
  );
}
