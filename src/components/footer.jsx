import React from "react";


import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";


import { Validar } from "../js/Validar";

import "../css/style.css";

import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {

  const Input = ({ label, id, name, type, register, error }) => {
    return (
      <>
        <label>{label}</label>
        {error && <span className="spanMsg">{error.message}</span>}
        <input
          className="txtInput"
          id={id}
          name={name}
          type={type}
          placeholder="Digite os dados aqui..."
          {...register(name)}
        />
      </>
    );
  };

  const Textarea = ({ label, id, name, type, register, error }) => {
    return (
      <>
        <label>{label}</label>
        {error && <span className="spanMsg">{error.message}</span>}
        <textarea
          className="txtArea"
          id={id}
          name={name}
          type={type}
          placeholder="Digite os dados aqui..."
          {...register(name)}
        ></textarea>
      </>
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validar),
  });

 
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <footer id="contact">
      <section className="contact">
        <div className="wrap">
          <h1 className="titleContact">Contatos</h1>

          <div className="grid wrap">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <label className="txtTitle">Título do Problema</label>

              <Input
                placeholder="Digite o Título..."
                name="titulo"
                register={register}
                error={errors.titulo}
              />

              <label className="txtTitle">Descreva Seu Problema</label>

              <Textarea
                name="ass"
                id="ass"
                placeholder="Descreva o Problema..."
                register={register}
                error={errors.msg}
              />

              <button type="submit" className="btnForm">
                ENVIAR
              </button>
              <button type="reset" onClick={() => reset()} className="btnForm">
                RESETAR
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
                    <FaInstagram
                      alt="Email"
                      title="Email"
                      className="iconimg"
                    />

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
        </div>
      </section>

      <section className="copy">
        <h3 className="copyWrite">@CopyWrite by Wesley</h3>
      </section>
    </footer>
  );
};

export default Footer;
