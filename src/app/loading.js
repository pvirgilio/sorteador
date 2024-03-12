import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function loading() {
  return (
    <div className="absolute z-50 w-full h-screen bg-white">
      <AiOutlineLoading3Quarters
        className="animate-spin"
        size={40}
        color="black"
      />
    </div>
  );
}
