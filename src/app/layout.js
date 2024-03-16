import { Urbanist } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { sorteador } from "../../public/sorteador.webp";
import { SorteioProvider } from "@/components/context/sorteioContext";

const fonte = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Sorteador de Números",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(fonte.className, "w-full   ")}>
        <SorteioProvider>{children}</SorteioProvider>
      </body>
    </html>
  );
}
