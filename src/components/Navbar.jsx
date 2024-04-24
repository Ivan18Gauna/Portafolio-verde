// import { useEffect } from "react";
// import { BiMenu } from "react-icons/bi";

// function Navbar() {
//   useEffect(() => {
//     // Función para habilitar el desplazamiento suave
//     const enableSmoothScroll = () => {
//       document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.addEventListener("click", function (e) {
//           e.preventDefault();

//           document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth",
//           });
//         });
//       });
//     };

//     // Llamar a la función al cargar el componente
//     enableSmoothScroll();

//     // Limpieza del evento al desmontar el componente
//     return () => {
//       document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.removeEventListener("click", function () {});
//       });
//     };
//   }, []);

//   return (
//     <nav>
//       <div className="p-8 bg-emerald-100">
//         <div className="container mx-auto flex items-center justify-start">
//           <div className="flex pr-20 text-3xl font-bold">
//             <p>Web</p>
//             <p className="text-green-500">Dev</p>
//           </div>

//           <div className="lg:hidden md:hidden flex justify-center">
//             <button>
//               <BiMenu />
//             </button>
//           </div>

//           <div className="hidden lg:flex md:flex">
//             <a href="#section1" className="mr-6 text-xl">
//               Home
//             </a>
//             <a href="#section2" className="mr-6 text-xl">
//               Skills
//             </a>
//             <a href="#section3" className="mr-6 text-xl">
//               About me
//             </a>
//             <a href="#section4" className="mr-6 text-xl">
//               Projects
//             </a>
//             <a href="#section5" className="mr-6 text-xl">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
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

  const handleCVButtonClick = () => {
    const cvURL = "https://drive.google.com/file/d/15ZVjunzEHH9Qp3ZNkZM0uYujrAjWscPf/view?usp=sharing";
    window.open(cvURL, "_blank");
  };

  return (
    <nav className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="p-8 bg-emerald-100">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex text-3xl font-bold">
            <p>Web</p>
            <p className="text-green-500">Dev</p>
          </div>

          <div className="lg:hidden md:hidden">
            <button className="text-3xl">
              <BiMenu />
            </button>
          </div>

          <div className="hidden lg:flex md:flex items-center">
            <a href="#section1" className="mr-6 text-xl">
              Home
            </a>
            <a href="#section2" className="mr-6 text-xl">
              Skills
            </a>
            <a href="#section3" className="mr-6 text-xl">
              About me
            </a>
            <a href="#section4" className="mr-6 text-xl">
              Projects
            </a>
            <a href="#section5" className="mr-6 text-xl">
              Contact
            </a>
          </div>
          
          <div className="lg:flex md:flex items-center justify-end">
            <button className="text-xl" onClick={handleCVButtonClick}>Curriculum Vitae</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

