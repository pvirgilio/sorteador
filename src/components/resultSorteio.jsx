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
      if (nomeSorteio && numeroSorteado.length > 0) {
        setLoading(false);
      }
    }, 2000);
  }, [nomeSorteio, numeroSorteado]);
  return loading ? (
    <div className="bg-white w-full h-full flex items-center justify-center">
      <AiOutlineLoading3Quarters
        className="absolute animate-spin"
        size={40}
        color="black"
      />
    </div>
  ) : (
    <div className="bg-white">
      <div className="relative max-w-[400px] w-full h-[400px]  ">
        <span className="absolute bg-white w-full text-center z-30 text-black font-bold">
          {nomeSorteio}
        </span>
        <Image
          src={imageSorteio ? imageSorteio : sorteador}
          alt="Imagem do Sorteio"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-3xl font-bold text-center">Números sorteados:</h1>

      {numeroSorteado.length > 0 && (
        <div className="mt-1 flex flex-col max-w-[400px] w-full items-center justify-center">
          <h2 className="">Números sorteados:</h2>
          <span className=" flex text-center text-lg max-h-[240px] overflow-auto font-bold text-yellow-600">
            {numeroSorteado.join(",  ")}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-2 items-center justify-center">
        <button
          className="bg-black text-white font-bold p-3 rounded-lg"
          onClick={() => {
            setIsSubmitted(false);
            setNumeroSorteado([]);
          }}
        >
          Sortear novamente
        </button>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsSubmitted(false);
        }}
        className="bg-black text-white font-bold p-3 rounded-lg"
      >
        Voltar para tela inicial
      </button>
    </div>
  );
}
