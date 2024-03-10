import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-primary/5 dark:bg-secondary/40 drop-shadow-2xl">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8 text-purple-500">
            Internet al Mejor Precio
            <br />{" "}
            <span className="text-xl text-slate-600">
              Haz click y solicita tu instalación...
            </span>
          </h2>
          <div className="flex gap-2">
            <Link href="https://clientes.portalinternet.app/solicitar-instalacion/ispcs/">
              <Button>Solicitar Internet</Button>
            </Link>
            <Link href="https://clientes.portalinternet.app/saldo/ispcs/">
              <Button
                className="bg-primary/30 hover:bg-primary/90"
                variant="secondary"
              >
                Abonar el Mes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
