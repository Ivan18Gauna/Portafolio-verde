import { useState } from "react";
import emailjs from "@emailjs/browser";
// import { SMTPClient } from 'emailjs';

export const Mail = () => {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function sendEmail(e) {
    e.preventDefault();
    if (input.user_name && input.user_email && input.user_message) {
      emailjs
        .sendForm(
          "service_yekckne",
          "template_vcbg65s",
          e.target,
          "lVkn881jkfeYEfMvo"
        )
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setInput({
        user_name: "",
        user_email: "",
        user_message: "",
      });
      alert("Su mensaje fu enviado con exito");
    } else {
      alert("Todos los campos deven ser completados");
    }
  }
  return (
    <div className="flex items-start justify-center bg-emerald-100 h-screen">
      <div className="mt-60 pl-80">
        <img
          src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg"
          alt="Imagen"
        />
      </div>
      <div className="flex items-center justify-center flex-col w-full text-center pt-44 mx-32">
        <form
          className="w-full max-w-md bg-emerald-200 py-10"
          onSubmit={sendEmail}
        >
          <div>
            <label className="mr-10">Nombre</label>
            <input
              type="text"
              name="user_name"
              onChange={handleInput}
              value={input.user_name}
            />
          </div>
          <br />
          <div>
            <label className="mr-16">Email</label>
            <input
              type="email"
              name="user_email"
              onChange={handleInput}
              value={input.user_email}
            />
          </div>
          <br />
          <label>Mensaje</label>
          <br />
          <textarea
            name="user_message"
            onChange={handleInput}
            value={input.user_message}
            className=""
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <button className="bg-emerald-300 text-slate-500 hover:text-black font-bold py-2 px-4 border border-black rounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
