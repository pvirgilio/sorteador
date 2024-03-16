"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import sorteador from "../../public/sorteador.webp";
import { ImgSorteioContext } from "./context/sorteioContext";

export default function ImgSorteio() {
  const { imageSorteio, handleInput } = useContext(ImgSorteioContext);

  return (
    <div className="relative group flex flex-col items-center justify-center max-w-[400px] w-full h-[400px]">
      <input
        type="file"
        name=""
        id=""
        className="z-30 absolute bg-black opacity-0 max-w-[400px] h-full transition-opacity duration-300 "
        onChange={(e) => handleInput(e)}
      />
      <div className="relative max-w-[400px] w-full h-[400px]  ">
        <span className="absolute bg-white w-full text-center z-30 text-black pb-1 ">
          Escolha a imagem do sorteio:
        </span>
        <Image
          className="rounded-xl"
          src={imageSorteio ? imageSorteio : sorteador}
          alt="Imagem do Sorteio"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute w-full h-full flex items-center justify-center  top-0 left-0 opacity-0 group-hover:bg-black group-hover:opacity-50 transition-opacity duration-300">
        {/* Exemplo de ícone SVG para edição */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="black"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </div>
    </div>
  );
}
