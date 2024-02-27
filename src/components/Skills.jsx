import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
function Skills() {
  return (
    <div className="pb-80 pt-52">
      <div className="mb-20">
        <span className="font-bold text-4xl ml-20">Tech Stack</span>
      </div>
      <div className="flex justify-between">
        <div className="mx-20">
          <SiJavascript className="w-20 h-20" />
          <h2 className="font-bold text-xl my-4">Javascript</h2>
          Con JavaScript, he conquistado desafíos web complejos, dando a cada
          proyecto de funcionalidades únicas. Mi travesía incluyó retos diarios,
          una disciplina que no solo amplió mis conocimientos, sino que también
          inyectó innovación constante en mis soluciones.
          <p></p>
        </div>
        <div className="mx-20">
          <RiReactjsLine className="w-20 h-20" />
          <h2 className="font-bold text-xl my-4">React</h2>
          Con React, hago magia en las interfaces. Superé problemas de
          interacion, velocidades entre otros. Cada parte de mi código es como
          un truco para hacer que las cosas sean fáciles de usar y se vean
          geniales.
          <p></p>
        </div>
        <div className="mx-20">
          <SiTailwindcss className="w-20 h-20" />
          <h2 className="font-bold text-xl my-4">Tailwind css</h2>
          <p>
            Con Tailwind CSS, simplifico el arte del diseño web. He resuelto
            dilemas estilísticos con precisión, dando forma a interfaces
            llamativas. Es como tener un set de herramientas que hace que todo
            se vea genial sin complicaciones.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
