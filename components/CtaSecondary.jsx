"use client";
/** 
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
*/
const CtaSecondary = () => {
  return (
    <section className="mt-28">
      <div className="w-full mx-auto bg-primary/5 drop-shadow-2xl">
        <h2 className="h3 text-center m-16 p-10 text-primary md:w-2/3 mx-auto">
          Ahora es más facil abonar tu factura escaneando el codigo QR <br />{" "}
          ¡Todos los medios de pago!
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-6 container mx-auto ">
        <div className="lg:w-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15619.52702258228!2d-58.544975719058925!3d-34.61424790245477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1709815491496!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <h2 className="h4 text-center  text-purple-500  lg:text-left mx-auto">
            ¡Descubre si estamos en tu barrio! Estamos creciendo rápidamente y
            llegando a más lugares cada día.
          </h2>
        </div>
        {/* 
        <form className="flex flex-col gap-y-4 lg:w-1/2">
          <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Nombre" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Email" />
            <MailIcon className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Textarea type="name" id="text" placeholder="Deje Su Mensaje..." />
            <MessageSquare className="absolute top-4 right-6" size={20} />
          </div>
          <Button className="flex items-center max-w-[166px] gap-x-1">
            Enviar
            <ArrowRightIcon size={20} />
          </Button>
        </form>
        */}
      </div>
    </section>
  );
};

export default CtaSecondary;
