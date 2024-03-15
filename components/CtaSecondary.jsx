"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { RxArrowTopRight } from "react-icons/rx";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";

// swiper component
const ctaData = [
  {
    title: "Paso 1",
    path: "/steps/1.jpeg",
  },
  {
    title: "Paso 2",
    path: "/steps/2.jpeg",
  },
  {
    title: "Paso 3",
    path: "/steps/3.jpeg",
  },
  {
    title: "Paso 4",
    path: "/steps/4.jpeg",
  },

  {
    title: "Paso 5",
    path: "/steps/5.jpeg",
  },
  {
    title: "Paso 6",
    path: "/steps/6.jpeg",
  },
  {
    title: "Paso 7",
    path: "/steps/7.jpeg",
  },
];
const CtaSecondary = () => {
  {
    /** */
  }
  return (
    <section className="mt-28 bg-primary/5 flex flex-col md:flex-row px-10 md:px-32">
      <div className=" container w-full mx-auto text-center m-16 px-10 pt-5 text-primary">
        <h2 className="h2">
          Ahora es más fácil abonar tu factura <br /> ¡Todos los medios de pago!
        </h2>
      </div>
    </section>
  );
};

export default CtaSecondary;
