import "../css/style.css";

import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact">
      <section className="contact">
        <h1 className="titleContact">Contatos</h1>
        <div className="grid wrap">
          <form action="" method="post" className="form">
            <label className="txtTitle">Título do Problema</label>
            <input
              className="txtInput"
              type="text"
              placeholder="Digite o Título..."
            />
            <label for="">Descreva seu Problema</label>
            <textarea
              name=""
              id=""
              placeholder="Descreva o Problema..."
            ></textarea>
            <button type="button" className="btnForm">
              ENVIAR
            </button>
          </form>
          <div className="divFlexColums">
            <div className="linkIcons">
              <div className="divLink">
                <div className="config">
                  <AiOutlineMail
                    alt="Email"
                    title="Email"
                    className="iconimg"
                  />
                  <span className="desc">wesleydesouza501@gmail.com</span>
                </div>
                <div className="config">
                  <FaWhatsapp alt="Email" title="Email" className="iconimg" />
                  <span className="desc">(43) 99910-2885</span>
                </div>
                <div className="config">
                  <FaInstagram alt="Email" title="Email" className="iconimg" />
                  <span className="desc">jwesley.dsf</span>
                </div>
                <div className="config">
                  <FaDiscord alt="Email" title="Email" className="iconimg" />
                  <span className="desc">23wesley23 #9003</span>
                </div>
              </div>
            </div>
            <div className="linkIcons">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1537.3938215970463!2d-46.61038816145678!3d-23.584264794130654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5be650476023%3A0x2c33390e6e3805b1!2sMuseu%20do%20Ipiranga%20-%20USP!5e0!3m2!1spt-BR!2sbr!4v1709863815659!5m2!1spt-BR!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="mapa"
              ></iframe>
            </div>
          </div>
        </div>
        
      </section>

      <section className="copy">
              <h3 className="copyWrite">@CopyWrite by Wesley</h3>
      </section>
    </footer>
  );
};

export default Footer;
