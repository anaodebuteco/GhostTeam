import { posts } from "../data/posts.js";

export default function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      {posts.map((p) => (
        <article key={p.id} className="card post">
          <small>{new Date(p.data).toLocaleDateString("pt-BR")}</small>
          <h3>{p.titulo}</h3>
          <p>{p.texto}</p>
        </article>
      ))}
    </section>
  );
}
