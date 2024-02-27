import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState, useEffect } from "react";
const Home = () => {
  useEffect(() => {
    // Función para habilitar el desplazamiento suave
    const enableSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    };

    // Llamar a la función al cargar el componente
    enableSmoothScroll();

    // Limpieza del evento al desmontar el componente
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);
  const texts = [" Iván Gauna", " Correntino", " Developer"];
  const [currentText, setCurrentText] = useState(texts[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotar al siguiente texto
      const currentIndex = texts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
    }, 2000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [currentText, texts]);
  return (
    <div className="flex items-start justify-center bg-emerald-100 h-screen">
      <div className="flex items-start justify-start flex-col w-full text-center pt-72 pl-40 ">
        <h1 className="text-7xl font-bold mb-6">
          Hola, soy
          <span className="text-gray-500">{currentText}</span>
        </h1>
        <p className="text-3xl mb-2">Front-end Developer</p>
        <p className="mb-6 text-lg text-slate-700">
          Actitud imparable, Siempre al máximo, Actitud positiva, Positividad
          sin límites
        </p>

        <div className="mb-4 space-x-4 text-10xl">
          <a
            href="https://www.linkedin.com/in/ivangauna/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <FaLinkedin />
            </button>
          </a>
          <a
            href="https://github.com/Ivan18Gauna/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <FaGithub />
            </button>
          </a>

          <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
            <a href="#section5">
              <IoMdMail />
            </a>
          </button>
        </div>
      </div>
      <div className="mt-60 pr-80">
        <img
          src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg"
          alt="Imagen"
        />
      </div>
    </div>
  );
};

export default Home;
