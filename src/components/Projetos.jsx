import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const projetos = [
  {
    titulo: "Portfólio Profissional",
    descricao: "Portfólio desenvolvido com HTML, CSS e JavaScript responsivo.",
    link: "https://github.com/alineelite11-byte/portfolio-mvp",
  },
  {
    titulo: "Página de Login",
    descricao: "Interface moderna de login com validação.",
    link: "#",
  },
  {
    titulo: "Lista de Tarefas",
    descricao: "Aplicação JavaScript para organização de tarefas.",
    link: "#",
  },
];

function Projetos() {
  return (
    <section id="projetos" className="container">
      <h2>Projetos</h2>
      <div className="grid">
        {projetos.map((projeto, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="card-top">
              <FaCode className="card-icon" />
              <h3>{projeto.titulo}</h3>
            </div>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Ver Projeto
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;