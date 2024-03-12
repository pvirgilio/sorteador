import { Sorteador } from "@/components/sorteador";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="w-[100%] h-screen fixed bg-sorteador bg-cover bg-no-repeat filter brightness-50 blur-[2px] "></div>

      <Sorteador />
    </main>
  );
}
