import { useState } from "react";
import perfilImg from "../assets/perfil.jpg";
import {
  FaHome,
  FaUser,
  FaCode,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">
          <img src={perfilImg} alt="Foto Aline" className="logo-img" />
          Portfólio Profissional
        </h1>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav>
          <ul className={`menu ${open ? "active" : ""}`}>
            <li>
              <a href="#" onClick={() => setOpen(false)}>
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => setOpen(false)}>
                <FaUser /> Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={() => setOpen(false)}>
                <FaCode /> Projetos
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alineelite11-byte"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => setOpen(false)}>
                <FaEnvelope /> Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
