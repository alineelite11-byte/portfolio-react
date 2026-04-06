import Header from "./components/Header";
import Projetos from "./components/Projetos";
import "./App.css";
import foto from "./assets/perfil.jpg";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Aline Oliveira Gomes</h2>
            <p>Estudante • Tecnólogo em Sistemas para Internet</p>

            <div className="social">
              <a href="https://github.com/alineelite11-byte" target="_blank">
                <FaGithub />
              </a>
              <a href="mailto:alineelite11@gmail.com">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/alineelite/">
                <FaInstagram />
              </a>
            </div>

            <a href="#projetos" className="btn">
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            className="hero-img"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={foto} alt="Aline Oliveira Gomes" />
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Sobre mim</h2>
          <p>
            Meu nome é <strong>Aline Oliveira Gomes</strong>. Sou estudante do
            curso <strong>Tecnólogo em Sistemas para Internet</strong> e estou
            em processo de aprendizagem em desenvolvimento web, utilizando
            HTML5, CSS3 e JavaScript para criação de projetos simples e
            funcionais.
          </p>
        </motion.div>
      </section>

      <Projetos />

      <section id="contato" className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Contato</h2>
          <p>Você pode me encontrar nos links abaixo:</p>

          <div className="contato-links">
            <a
              href="https://github.com/alineelite11-byte"
              target="_blank"
              className="btn"
            >
              <FaGithub /> GitHub
            </a>
            <a href="mailto:alineelite11@gmail.com" className="btn">
              <FaEnvelope /> Email
            </a>
          </div>
        </motion.div>
      </section>

      <footer>© 2026 - Aline Oliveira Gomes</footer>
      <a
        href="https://wa.me/5589981114518" 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;
