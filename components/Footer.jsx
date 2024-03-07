import {
  HiOutlineGlobeEuropeAfrica,
  HiOutlineDevicePhoneMobile,
  HiOutlineMap,
  HiOutlineClock,
} from "react-icons/hi2";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-secondary border-t-2 mt-28">
      <div className="container px-5 py-10 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col text-center items-center md:text-left md:items-start">
          <div>
            <Logo />
          </div>
          <p className="text-sm text-white">Servicio de internet</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="title-font font-medium  tracking-widest text-sm mb-3 flex flex-col text-center md:text-left text-white">
            CSNET EMPRESA
          </h2>
          <nav className=" flex flex-col gap-2 text-center md:text-left">
            <Link href="/" className=" hover:text-gray-300 text-white">
              Inicio
            </Link>

            <Link href="/" className=" hover:text-gray-300 text-white">
              Planes Actuales
            </Link>

            <Link href="/" className=" hover:text-gray-300 text-white">
              Pagos Directos
            </Link>
          </nav>
        </div>
        <div className=" flex-col space-y-2 hidden md:flex">
          <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-center md:text-left text-white">
            TÉRMINOS DE USO
          </h2>
          <nav className=" flex flex-col gap-2 text-center md:text-left">
            <p className="cursor-pointer text-white"> Términos de uso</p>

            <p className=" hover:text-gray-300 cursor-pointer text-white">
              Política de privacidad
            </p>

            <p className=" hover:text-gray-300 cursor-pointer text-white">
              Trabaja con nosotros
            </p>
          </nav>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-center md:text-left text-white">
            BUENOS AIRES, ARGENTINA
          </h2>
          <nav className=" flex flex-col gap-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start  text-white">
              <HiOutlineGlobeEuropeAfrica className="text-3xl" />
              <p className=" hover:text-gray-300  text-white ">
                <Link href="www.csnet.com.ar">www.csnet.com.ar</Link>
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-white">
              <HiOutlineDevicePhoneMobile className="text-3xl" />
              <p className=" hover:text-gray-300 text-white">
                <Link href="https://wa.me/+5491134235068">
                  {" "}
                  +54 911 3423 5068
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-white">
              <HiOutlineMap className="text-3xl" />
              <p className=" hover:text-gray-300 text-white">
                <Link href="/">testdireccion 123123</Link>
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-white">
              <HiOutlineClock className="text-3xl" />
              <p className=" hover:text-gray-300 text-white">
                <Link href="/">Lunes a Viernes de 8 a 20hs</Link>
              </p>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-gray-100 h-[60px] flex items-center w-full mx-auto">
        <div className="container mx-auto py5- px-5 items-center sm:px-20 gap-2">
          <p className=" text-center  text-gray-800 py-1">
            Desarrollado por —
            <Link
              href="/"
              rel="noopener noreferrer"
              className="ml-1 text-gray-800"
              target="_blank"
            >
              @GLinares
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
