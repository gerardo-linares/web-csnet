import { Headset, SignalHigh, Wifi } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Wifi size={72} strokeWidth={0.8} />,
    title: "BANDA ANCHA SIMÉTRICA",
    description:
      "Todos los megas de nuestra conexión funcionan en ambos sentidos de forma simétrica para que puedas descargar y compartir lo que gustes.",
  },
  {
    icon: <SignalHigh size={72} strokeWidth={0.8} />,
    title: "RED LOCAL DE ALTA VELOCIDAD",
    description:
      "Red Local de velocidad de hasta 1gbps (1000 megas por segudo!) una experiencia única de intercambio de archivos y contenidos.",
  },
  {
    icon: <Headset size={72} strokeWidth={0.8} />,
    title: "SOPORTE 365",
    description:
      "Respondemos tu consulta dentro de las 24 horas. Rápida reacción ante la necesidad del cliente. Eres muy importante para nosotros.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto " id="services">
        <h2 className="section-title mb-12 mt-24 xl:mb-24 text-center mx-auto">
          Servicios
        </h2>
        {/*grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className=" text-primary absolute -top-[60px]">
                  <div className="w-[128px] h-[70px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
