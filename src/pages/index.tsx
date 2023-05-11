import Image from "next/image";
import { Inter } from "next/font/google";
import ResultSummary from "@/components/ResultSummary";
import DarkToggle from "@/components/DarkToggle";
import PaymentCard from "@/components/PaymentCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      {/* <ResultSummary /> */}
      {/* <DarkToggle /> */}
      <PaymentCard />
    </main>
  );
}
