import React from "react";

const Map = () => {
  return (
    <div className="container mx-auto mt-28">
      {" "}
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
            ¿Quieres saber si ya estamos en tu zona? Estamos creciendo
            rápidamente y conectando a más lugares cada día.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Map;
