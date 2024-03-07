import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-primary/20 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Internet al Mejor Precio
            <br />{" "}
            <span className="text-xl text-slate-600">
              Haz click para mas info...
            </span>
          </h2>
          <Link href="/contact">
            <Button>Pedir Internet</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
