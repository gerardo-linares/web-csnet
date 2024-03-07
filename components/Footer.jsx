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
          <p className="text-sm text-white">" Servicio de internet"</p>
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
      <div className="bg-gray-100 h-[60px] flex items-center">
        <div className="container mx-auto py5- px-5 flex flex-wrap  flex-col-reverse sm:flex-row items-center sm:px-20 gap-2">
          <p className=" text-center sm:text-left text-gray-800 py-1">
            © 2024 —
            <Link
              href="/"
              rel="noopener noreferrer"
              className=" ml-1 text-gray-800"
              target="_blank"
            >
              @GLinares
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-4">
            <Link href="#" target="_blank" className="text-primary">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" target="_blank" className="ml-3 text-primary">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href="#" target="_blank" className="ml-3 text-primary">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
