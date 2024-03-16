"use client";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import sorteador from "../../public/sorteador.webp";
import ImgSorteio from "./imgSorteio";
import SubmittedComponent from "./resultSorteio";
import { ImgSorteioContext } from "./context/sorteioContext";
import { parse } from "postcss";

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
  const [storageName, setStorageName] = useState("");
  const [storageQuantidade, setStorageQuantidade] = useState("");
  const [storageNumeros, setStorageNumeros] = useState("");
  useEffect(() => {
    setStorageName(localStorage.getItem("nomeSorteio"));
    setStorageQuantidade(localStorage.getItem("quantidade"));
    setStorageNumeros(localStorage.getItem("totalNumeros"));
  }, []);
  return (
    <div className="absolute w-full h-full flex  justify-center items-center">
      {isSubmitted ? (
        <SubmittedComponent /> // Exibe o componente após o envio do formulário
      ) : (
        <form
          className=" bg-white max-w-[800px] w-full flex  items-center justify-center  gap-5  border border-solid  border-[#ccc] rounded-xl p-10 shadow-xl max-md:flex-col-reverse max-md:max-w-[500px] max-md:p-5 max-md:border-none "
          onSubmit={sortearNumero}
        >
          <div className="w-full flex flex-col gap-3 items-center justify-center">
            <h1 className="text-center text-3xl font-bold max-md:text-xl ">
              Sorteador de Rifa
            </h1>
            <label className="w-full text-left max-md:text-base ">
              Nome do sorteio/rifa:
            </label>
            <input
              type="text"
              className="w-full p-3 border border-solid border-[#ccc]"
              onChange={(e) => {
                setNomeSorteio(e.target.value);
              }}
              onKeyUp={(e) => {
                localStorage.setItem("nomeSorteio", e.target.value);
              }}
              value={nomeSorteio ? nomeSorteio : storageName}
              required
            />
            <label className="w-full text-left">Números sorteados:</label>
            <input
              className="w-full p-3 border border-solid border-[#ccc]"
              onChange={(e) => {
                setQuantidade(e.target.value);
              }}
              onKeyUp={(e) => {
                localStorage.setItem("quantidade", e.target.value);
              }}
              value={quantidade ? quantidade : parseInt(storageQuantidade)}
              type="number"
              placeholder="Números sorteados"
              required
            />

            <label className="w-full text-left ">Total de números:</label>
            <input
              className="w-full border border-solid border-[#ccc] p-3"
              type="number"
              onChange={(e) => {
                setTotalNumeros(e.target.value);
              }}
              onKeyUp={(e) => {
                localStorage.setItem("totalNumeros", e.target.value);
              }}
              value={totalNumeros ? totalNumeros : parseInt(storageNumeros)}
              placeholder="Total de números existentes"
              required
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
