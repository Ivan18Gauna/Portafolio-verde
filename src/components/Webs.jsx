import { AiOutlineGlobal, AiOutlineGithub } from "react-icons/ai";

export function Webs() {
  return (
    <div className="py-40">
      <span className="font-bold text-4xl ml-20">Proyectos</span>
      <div className="flex mt-10">
        <div className="pl-10">
          <img src="clinic.jpeg" alt="" className="w-80 h-auto object-cover" />
          <h1 className="my-6">Proyecto grupal</h1>
          <p>
            Mi labor de liderazgo en el equipo de front-end implica garantizar
            que las funcionalidades se completen puntualmente. Utilizamos HTML,
            CSS, React y JavaScript para desarrollar interfaces eficientes.
            Implementamos metodologías Scrum, dividiendo el trabajo en sprints
            para una gestión ágil, asegurando entregas efectivas y colaboración
            constante con el equipo...
          </p>
          <a
            href="https://www.youtube.com/watch?v=G_hl6WC4OS4"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <AiOutlineGlobal />
            </button>
          </a>
          <a
            href="https://github.com/Ivan18Gauna/app-clinica"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <AiOutlineGithub />
            </button>
          </a>
        </div>
        <div className="px-10">
          <img src="ecomerce.jpeg" alt="" className="w-80 h-auto object-cover" />
          <h1 className="my-6">Ecommerce</h1>
          <p>
            En mi proyecto de comercio electrónico, empleé React, JavaScript y
            Tailwind CSS para crear una interfaz fácil de usar y altamente
            funcional. El enfoque se centró en la usabilidad y la eficiencia,
            destacando mi capacidad para desarrollar soluciones front-end
            efectivas con estas tecnologías.
          </p>
          <a
            href="https://web-store-lilac.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <AiOutlineGlobal />
            </button>
          </a>{" "}
          <a
            href="https://github.com/Ivan18Gauna/web-store"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <AiOutlineGithub />
            </button>
          </a>
        </div>{" "}
        <div className="px-10">
          <img src="pelis.jpeg" alt="" className="w-80 h-auto object-cover" />
          <h1 className="my-6">App de películas</h1>
          <p>
            En mi proyecto de buscador de películas, desarrollé una interfaz
            responsive con scroll infinito utilizando React, JavaScript, HTML y
            CSS. Este enfoque permitió una experiencia de usuario fluida al
            explorar películas, resaltando mi habilidad para crear soluciones
            front-end atractivas y funcionales.
          </p>
          <a
            href="https://app-pelis.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <AiOutlineGlobal />
            </button>
          </a>
          <a
            href="https://github.com/Ivan18Gauna/app-pelis"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-2 text-slate-500 hover:text-black text-5xl">
              <AiOutlineGithub />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
