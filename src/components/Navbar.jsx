import { useEffect } from "react";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  useEffect(() => {
    // Función para habilitar el desplazamiento suave
    const enableSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    };

    // Llamar a la función al cargar el componente
    enableSmoothScroll();

    // Limpieza del evento al desmontar el componente
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", function () {});
      });
    };
  }, []);

  return (
    <nav>
      <div className="p-8 bg-emerald-100">
        <div className="container mx-auto flex items-center justify-start">
          <div className="flex pr-20 text-3xl font-bold">
            <p>Web</p>
            <p className="text-green-500">Dev</p>
          </div>

          <div className="lg:hidden md:hidden flex justify-center">
            <button>
              <BiMenu />
            </button>
          </div>

          <div className="hidden lg:flex md:flex">
            <a href="#section1" className="mr-6 text-xl">
              Home
            </a>
            <a href="#section2" className="mr-6 text-xl">
              Skills
            </a>
            <a href="#section3" className="mr-6 text-xl">
              About
            </a>
            <a href="#section4" className="mr-6 text-xl">
              Projects
            </a>
            <a href="#section5" className="mr-6 text-xl">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
