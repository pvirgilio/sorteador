import { Sorteador } from "@/components/sorteador";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-full fixed bg-sorteador bg-cover bg-no-repeat filter brightness-50 blur-[2px] max-md:hidden "></div>

      <Sorteador />
    </main>
  );
}
