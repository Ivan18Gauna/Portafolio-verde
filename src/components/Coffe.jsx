const Coffe = () => {
  return (
    <div className="flex items-start justify-center bg-emerald-100 h-screen">
      <div className="mt-60 pl-80">
        <img
          src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg"
          alt="Imagen"
        />
      </div>
      <div className="flex items-start justify-start flex-col w-full text-center pt-60 mx-32 ">
        <h1 className="text-4xl font-bold mb-2 ml-64">Codigo + Coffe</h1>
        <p className="text-lg mb-2 px-32">
          Me destaco por mis proyectos, donde fusiono la destreza técnica con la
          habilidad de trabajar en equipo. Enfrenté el desafío de liderar un
          equipo, establecer metas concretas y adoptar Scrum, marcando mi
          transición hacia una gestión eficiente. En el ámbito técnico, mi
          destreza en ReactJS y Tailwind CSS da vida a interfaces sorprendentes,
          transformando ideas en experiencias visuales cautivadoras.
        </p>
      </div>
    </div>
  );
};

export default Coffe;
