import { useState } from "react";
import { projects, STATUS } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projetos() {
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState("Todos");

  const lista = projects.filter(
    (p) =>
      (status === "Todos" || p.status === status) &&
      (p.nome + p.descricao).toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section>
      <h1>Projetos</h1>
      <div className="filtros">
        <input placeholder="Buscar projeto..." value={busca} onChange={(e) => setBusca(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Todos</option>
          {STATUS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="grid">
        {lista.map((p) => <ProjectCard key={p.id} projeto={p} />)}
      </div>
      {lista.length === 0 && <p className="vazio">Nenhum projeto encontrado.</p>}
    </section>
  );
}
