import { Urbanist } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { sorteador } from "../../public/sorteador.webp";
import { SorteioProvider } from "@/components/context/sorteioContext";
import Link from "next/link";

const fonte = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Sorteador de Números",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(fonte.className, "w-full   ")}>
        <div className="fixed bg-black bottom-0 z-50 w-full p-5 flex items-center justify-center">
          <p className="text-white text-lg">
            Desenvolvido por:{" "}
            <Link
              className="text-blue-600 border-b border-blue-500"
              href="https://pedrovirgilio.netlify.appp"
            >
              Pedro Virgilio
            </Link>
          </p>
          <Link href="/sobre"></Link>
        </div>
        <SorteioProvider>{children}</SorteioProvider>
      </body>
    </html>
  );
}
