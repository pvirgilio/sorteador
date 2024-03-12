"use client";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import sorteador from "../../public/sorteador.webp";
import ImgSorteio from "./imgSorteio";
import SubmittedComponent from "./resultSorteio";
import { ImgSorteioContext } from "./context/sorteioContext";

export const SorteioContext = createContext();

export function Sorteador() {
  const {
    sortearNumero,
    quantidade,
    totalNumeros,
    numeroSorteado,
    setQuantidade,
    setTotalNumeros,
    imagemSalva,
    setImagemSalva,
    isSubmitted,
    setIsSubmitted,
    nomeSorteio,
    setNomeSorteio,
  } = useContext(ImgSorteioContext);

  return (
    <div className="absolute top-5 w-full flex  justify-center items-center  gap-10">
      {isSubmitted ? (
        <SubmittedComponent /> // Exibe o componente após o envio do formulário
      ) : (
        <form
          className=" bg-white max-w-[800px] w-full flex  gap-5  border border-solid  border-[#ccc] rounded-xl p-10 shadow-xl "
          onSubmit={sortearNumero}
        >
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <h1 className="text-center text-3xl font-bold ">
              Sorteador de Rifa
            </h1>
            <label>Nome do sorteio/rifa:</label>
            <input
              type="text"
              className="w-full p-3 border border-solid border-[#ccc]"
              onChange={(e) => {
                setNomeSorteio(e.target.value);
              }}
            />
            <label className=" text-sm ">Números sorteados:</label>
            <input
              value={quantidade}
              className="w-full p-3 border border-solid border-[#ccc]"
              onChange={(e) => {
                setQuantidade(e.target.value);
              }}
              type="number"
            />

            <label className=" text-sm ">Total de números:</label>
            <input
              className="w-full border border-solid border-[#ccc] p-3"
              type="number"
              value={totalNumeros}
              onChange={(e) => setTotalNumeros(e.target.value)}
              placeholder="Total de números existentes"
            />

            <button
              className=" w-full bg-black text-white font-bold  p-3 rounded-lg"
              type="submit"
            >
              Sortear
            </button>
          </div>

          <ImgSorteio />
        </form>
      )}
    </div>
  );
}
