import "../css/style.css";

import Profile from "../img/perfil.jpg";
import CardImg from "../img/slide_2.jpg"

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Page = () => {
  return (
    <main id="page">
      <section className="bannerPage">
        <div className="wrap colum1">
          <div className="titleBanner">
            <h1 className="textBanner">
              <span className="name">Wesley De Souza!</span>
              <span className="funcao">Desenvolvedor Web Fullstack.</span>
              <span className="sobre">
                Este é meu Portifólio, conheça um pouco mais sobre mim.
              </span>
            </h1>
            <div className="btnPortifolio">
              <a href="#_" target="_blank" className="linkGithub">
                <FaGithub
                  alt="Linkedin"
                  title="Linkedin"
                  className="Linkedin"
                />
                <span>GitHub</span>
              </a>
              <a href="#_" target="_blank" className="linkLinkedin">
                <FaLinkedin alt="Linkedin" title="Linkedin" class="Linkedin" />
                <span>Linkedin</span>
              </a>
            </div>
          </div>
          <img
            src={Profile}
            alt="Imagem para apresentação!"
            title="Imagem para apresentação!"
            className="imgBanner"
          />
        </div>
      </section>

      <section className="about" id="about">
        <div className="wrap">
          <div className="divAbout">
            <h1 className="titleAbout">Quem Sou!</h1>
            <div className="divP">
              <p className="P">
                Desenvolvedor Web Fullstack com experiência em: HTML 5, CSS 3,
                Tailwind, PHP 8, JavaScript, Jquery, Ajax, Banco de Dados MySQL.
              </p>
              <p className="P">
                Hoje com 18 anos, estudando com uma paixão intensa pela
                Programação Web desde os 15 anos de idade.
              </p>
              <p className="P">
                Tenho 3 certificados de conclusão de curso para Programação Web.
                Atualmente cursando Desenvolvimento de sistema com C# .NET e Web
                Desing com JavaScript e React. Todos os cursos feitos na{" "}
                <a href="https://www.wmbarros.com.br/" className="linkWM">
                  WMBarros - Treinamento em TI
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="wrap">
          <h1 className="titleAbout">Meus Projetos</h1>
          <div className="gridProjects">
            <div className="cardProjects">
              <img
                src={CardImg}
                alt="Projeto de site"
                title="Projeto de site"
                className="imgCard"
              />
              <h3>Projeto 1 - Front End</h3>
              <span className="textProjects">
                Projeto Corporativo | Site institucional
              </span>
              <div className="linkCard">
                <a href="#_" target="_blank" className="repLink">
                  <FaGithub
                    alt="Github"
                    title="Github"
                    className="imgGitHub"
                  />
                  Repositório
                </a>
                <a href="#_" target="_blank" className="repLink">
                  <FaSearch
                    alt="Site"
                    title="Site"
                    className="imgSite"
                  />
                  <span>Site</span>
                </a>
              </div>
            </div>
            <div className="cardProjects">
              <img
                src={CardImg}
                alt="Projeto de site"
                title="Projeto de site"
                className="imgCard"
              />
              <h3>Projeto 1 - Front End</h3>
              <span className="textProjects">
                Projeto Corporativo | Site institucional
              </span>
              <div className="linkCard">
                <a href="#_" target="_blank" className="repLink">
                  <FaGithub
                    alt="Github"
                    title="Github"
                    className="imgGitHub"
                  />
                  Repositório
                </a>
                <a href="#_" target="_blank" className="repLink">
                  <FaSearch
                    alt="Site"
                    title="Site"
                    className="imgSite"
                  />
                  <span>Site</span>
                </a>
              </div>
            </div>
            <div className="cardProjects">
              <img
                src={CardImg}
                alt="Projeto de site"
                title="Projeto de site"
                className="imgCard"
              />
              <h3>Projeto 1 - Front End</h3>
              <span className="textProjects">
                Projeto Corporativo | Site institucional
              </span>
              <div className="linkCard">
                <a href="#_" target="_blank" className="repLink">
                  <FaGithub
                    alt="Github"
                    title="Github"
                    className="imgGitHub"
                  />
                  Repositório
                </a>
                <a href="#_" target="_blank" className="repLink">
                  <FaSearch
                    alt="Site"
                    title="Site"
                    className="imgSite"
                  />
                  <span>Site</span>
                </a>
              </div>
            </div>
            <div className="cardProjects">
              <img
                src={CardImg}
                alt="Projeto de site"
                title="Projeto de site"
                className="imgCard"
              />
              <h3>Projeto 1 - Front End</h3>
              <span className="textProjects">
                Projeto Corporativo | Site institucional
              </span>
              <div className="linkCard">
                <a href="#_" target="_blank" className="repLink">
                  <FaGithub
                    alt="Github"
                    title="Github"
                    className="imgGitHub"
                  />
                  Repositório
                </a>
                <a href="#_" target="_blank" className="repLink">
                  <FaSearch
                    alt="Site"
                    title="Site"
                    className="imgSite"
                  />
                  <span>Site</span>
                </a>
              </div>
            </div>
            <div className="cardProjects">
              <img
                src={CardImg}
                alt="Projeto de site"
                title="Projeto de site"
                className="imgCard"
              />
              <h3>Projeto 1 - Front End</h3>
              <span className="textProjects">
                Projeto Corporativo | Site institucional
              </span>
              <div className="linkCard">
                <a href="#_" target="_blank" className="repLink">
                  <FaGithub
                    alt="Github"
                    title="Github"
                    className="imgGitHub"
                  />
                  Repositório
                </a>
                <a href="#_" target="_blank" className="repLink">
                  <FaSearch
                    alt="Site"
                    title="Site"
                    className="imgSite"
                  />
                  <span>Site</span>
                </a>
              </div>
            </div>
            <div className="cardProjects">
              <img
                src={CardImg}
                alt="Projeto de site"
                title="Projeto de site"
                className="imgCard"
              />
              <h3>Projeto 1 - Front End</h3>
              <span className="textProjects">
                Projeto Corporativo | Site institucional
              </span>
              <div className="linkCard">
                <a href="#_" target="_blank" className="repLink">
                  <FaGithub
                    alt="Github"
                    title="Github"
                    className="imgGitHub"
                  />
                  Repositório
                </a>
                <a href="#_" target="_blank" className="repLink">
                  <FaSearch
                    alt="Site"
                    title="Site"
                    className="imgSite"
                  />
                  <span>Site</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
