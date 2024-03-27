import Link from "next/link";
import { Button } from "./ui/button";
import { CreditCard, Wifi } from "lucide-react";
import {
  RiMapFill,
  RiTeamFill,
  RiGlobalFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import RedImg from "./RedImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="pt-16 md:pt-20 lg:py-24 h-[84vh]  lg:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex flex-cols-2 gap-x-6 ">
          {/*texto */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="text-sm uppercase font-bold mb-4 text-primary tracking-[4px]">
              Servicio de internet de alta velocidad
            </div>
            <h1 className="text-3xl xl:text-[60px] lg:leading-[60px] tracking-[-2px] font-bold h1 lg:mb-6">
              <p className="text-primary mt-2">CSNET </p>
              La velocidad <br /> del futuro, hoy.
            </h1>

            {/*botones */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12 mt-8 lg:mt-0">
              <Link href="#services">
                <Button className="gap-x-2 " size={"lg"}>
                  Servicios
                  <Wifi size={18} />
                </Button>
              </Link>
              <Link href="#prices">
                <Button
                  variant="secondary"
                  className="gap-x-2 bg-primary/30 hover:bg-primary/90"
                  size={"lg"}
                >
                  Planes
                  <CreditCard size={18} />
                </Button>
              </Link>
            </div>
          </div>
          {/*imagen */}
          {/*imagen */}
          <div className="hidden lg:flex relative  ">
            {/*badge 1 */}
            <Badge
              containerStyles="absolute top-[10%] -left-[-4rem]"
              icon={<RiMapFill />}
              endCountNum={27}
              badgeText="Barrios"
            />
            {/*badge 2*/}
            <Badge
              containerStyles="absolute top-[80%] -left-[-2rem]"
              icon={<RiGlobalFill />}
              endCountNum={11}
              badgeText="Años en el Mercado"
            />
            {/*badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8 mr-4"
              icon={<RiTeamFill />}
              endCountNum={3000}
              badgeText="Clientes en la Red"
            />
            <RedImg imgSrc="/hero/hero.jpg" />
          </div>
        </div>
        {/*icono*/}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 ">
          <RiArrowDownSLine className="text-3xl text-purple-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
