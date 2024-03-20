"use client";
import { useContext, useEffect, useState } from "react";
import { ImgSorteioContext } from "./context/sorteioContext";
import sorteador from "../../public/sorteador.webp";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Image from "next/image";

export default function SubmittedComponent() {
  const [loading, setLoading] = useState(false);

  const {
    sortearNumero,
    quantidade,
    totalNumeros,
    numeroSorteado,
    setQuantidade,
    setTotalNumeros,
    imageSorteio,
    setImageSorteio,
    isSubmitted,
    setIsSubmitted,
    nomeSorteio,
  } = useContext(ImgSorteioContext);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (nomeSorteio || numeroSorteado.length > 0) {
        setLoading(false);
      }
    }, 1000);
  }, [nomeSorteio, numeroSorteado]);
  return loading ? (
    <div className="bg-white p-7 rounded-full flex items-center justify-center ">
      <AiOutlineLoading3Quarters
        className="absolute animate-spin"
        size={40}
        color="black"
      />
    </div>
  ) : (
    <div className="bg-white max-w-[600px] w-full flex flex-col gap-10 items-center justify-center p-5 rounded-2xl ">
      <h1 className="text-xl font-semibold max-md:text-center">
        Parabéns! Estes são os números sorteados do:
      </h1>
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
        <span className=" bg-white text-2xl text-orange-500  text-center z-30  font-bold">
          {nomeSorteio}
        </span>
        <div className="relative max-w-[250px] w-full  h-[250px]  ">
          <Image
            src={imageSorteio ? imageSorteio : sorteador}
            alt="Imagem do Sorteio"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-center text-[">
        Números sorteados:
      </h1>

      {numeroSorteado.length > 0 && (
        <div className=" flex flex-col max-w-[400px] max-h-[240px] overflow-auto w-full items-center justify-center ">
          <span className=" flex text-justify text-lg  overflow-auto font-bold text-yellow-600">
            {numeroSorteado.join(",  ")}
          </span>
        </div>
      )}

      <div className="flex  gap-2 items-center justify-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
            setIsSubmitted(false);
          }}
          className="bg-[#4d4d4d] text-white font-bold p-3 rounded-lg max-md:text-sm"
        >
          Voltar para tela inicial
        </button>
        <button
          className="bg-orange-500 text-white font-bold p-3 rounded-lg max-md:text-sm"
          onClick={(e) => {
            sortearNumero(e);
          }}
        >
          Sortear novamente
        </button>
      </div>
    </div>
  );
}
