import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Sobre from "./pages/Sobre.jsx";
import Projetos from "./pages/Projetos.jsx";
import Blog from "./pages/Blog.jsx";
import Contato from "./pages/Contato.jsx";

const abas = [
  { id: "sobre", label: "Sobre", Page: Sobre },
  { id: "projetos", label: "Projetos", Page: Projetos },
  { id: "blog", label: "Blog", Page: Blog },
  { id: "contato", label: "Contato", Page: Contato },
];

export default function App() {
  const [atual, setAtual] = useState("sobre");
  const { Page } = abas.find((a) => a.id === atual);
  return (
    <>
      <Navbar abas={abas} atual={atual} onChange={setAtual} />
      <main><Page /></main>
      <footer>© {new Date().getFullYear()} GhostTeam</footer>
    </>
  );
}
