const Coffe = () => {
  return (
    <div className="flex items-start justify-center bg-emerald-100 min-h-screen">
  <div className="  mt-60 pl-80">
    <img
      src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg"
      alt="Imagen"
      className="max-w-full"
    />
  </div>
  <div className=" flex-grow flex items-center justify-center flex-col w-full text-center px-4 lg:px-32 pt-10 lg:pt-60">
    <h1 className="text-4xl font-bold mb-2">About me</h1>
    <p className="text-base lg:text-lg mb-2">
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
