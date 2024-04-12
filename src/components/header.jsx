import'../css/style.css';
import Logo from '../img/logo_white.png';

const header = () => {
    return (
      <header className="top" id='header'>
      <section className="logoTipo">
          <img src={Logo} alt="Aqui está o LogoTipo!" title="Aqui está o LogoTipo!"
              className="imgLogoTipo"></img>
      </section>

      <section className="menuWeb">
          <nav className="menuMobile">
              <ul className="menuOne">
                  <li><a href="#top" className="linkMenuMobile">Home</a></li>
                  <li><a href="#about" className="linkMenuMobile">Sobre mim</a></li>
                  <li><a href="#projects" className="linkMenuMobile">Portfólio</a></li>
                  <li><a href="#contact" className="linkMenuMobile">Contato</a></li>
              </ul>
          </nav>

          <nav className="menuDesktop">
              <ul className="menuTwo">
                  <li><a href="#page" className="linkMenuDesktop">Home</a></li>
                  <li><a href="#about" className="linkMenuDesktop">Sobre mim</a></li>
                  <li><a href="#projects" className="linkMenuDesktop">Portifólio</a></li>
                  <li><a href="#contact" className="linkMenuDesktop">Contato</a></li>
              </ul>
          </nav>
      </section>
  </header>
    );
}

export default header;