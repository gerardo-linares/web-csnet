import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const PricesData = [
  {
    promo: "",
    title: "Plan Basic",
    type: "SIMETRÍCA",
    description: "HOGAR",
    upload: "100 Mb",
    download: "100 Mb",
    speed: "Sin limites",
    price: "8000",
  },
  {
    promo: "MÁS PEDIDO",
    title: "Plan Standard",
    type: "SIMETRÍCA",
    description: "GAMER",
    upload: "100 Mb",
    download: "100 Mb",
    speed: "Sin limites",
    price: "9200",
  },
  {
    promo: "",
    title: "Plan Premium",
    type: "SIMETRÍCA",
    description: "EMPRESA",
    upload: "300 Mb",
    download: "300 Mb",
    speed: "Sin limites ",
    price: "21000",
  },
];
const Prices = () => {
  return (
    <section className="mb-12 xl:mb-36 container mx-auto ">
      <h2
        className="section-title mb-12 mt-24 xl:mb-24 text-center mx-auto"
        id="prices"
      >
        Planes y Precios
      </h2>
      <div className="flex justify-center ">
        {/*grid items */}
        <div className="flex-cols-1 md:flex justify-between gap-10 ">
          {PricesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[450px] h-[480px] flex flex-col justify-center items-center relative drop-shadow-2xl  "
                key={index}
              >
                <CardHeader className=" text-white absolute -top-[10px] w-full ">
                  <div className=" flex justify-center items-center bg-primary/50 rounded-md  drop-shadow-lg">
                    {item.promo}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <div className="flex flex-col gap-4">
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                    <CardDescription className="text-lg">
                      Velocidad: {item.type}
                    </CardDescription>

                    <CardDescription className="text-lg">
                      Subida: {item.upload}
                    </CardDescription>
                    <CardDescription className="text-lg">
                      Bajada: {item.download}
                    </CardDescription>
                    <CardDescription className="text-lg">
                      Datos: {item.speed}
                    </CardDescription>
                    <CardDescription className="text-xl font-semibold border-t-2 pt-2 ">
                      ${item.price}/mes
                    </CardDescription>
                  </div>
                </CardContent>
                <Link href="https://clientes.portalinternet.app/saldo/ispcs/">
                  <Button>Solicitar</Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
