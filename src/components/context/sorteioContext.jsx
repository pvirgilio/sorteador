// ImgSorteioContext.js
"use client";
import { createContext, useEffect, useState } from "react";

export const ImgSorteioContext = createContext();

export function SorteioProvider({ children }) {
  const [nomeSorteio, setNomeSorteio] = useState("");
  const [numeroSorteado, setNumeroSorteado] = useState([]);
  const [quantidade, setQuantidade] = useState(1);
  const [totalNumeros, setTotalNumeros] = useState(100);
  const [imageSorteio, setImageSorteio] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sortearNumero = (e) => {
    e.preventDefault();
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
      const numero = Math.floor(Math.random() * totalNumeros) + 1;
      numeros.push(numero);
    }
    setNumeroSorteado(numeros);
    setIsSubmitted(true); // Marca o formulário como enviado

    localStorage.clear();
  };
  function handleInput(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const base64String = reader.result;
      setImageSorteio(base64String);
      localStorage.setItem("imagemSorteio", base64String);
    };

    reader.readAsDataURL(file);
  }

  useEffect(() => {
    const storedImage = localStorage.getItem("imagemSorteio");
    if (storedImage) {
      setImageSorteio(storedImage);
    }
  }, []);

  return (
    <ImgSorteioContext.Provider
      value={{
        imageSorteio,
        handleInput,
        sortearNumero,
        quantidade,
        totalNumeros,
        numeroSorteado,
        setQuantidade,
        setTotalNumeros,
        isSubmitted,
        setIsSubmitted,
        setNomeSorteio,
        nomeSorteio,
      }}
    >
      {children}
    </ImgSorteioContext.Provider>
  );
}
