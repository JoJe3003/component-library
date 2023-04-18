import Image from "next/image";
import { Inter } from "next/font/google";
import ResultSummary from "@/components/ResultSummary";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <ResultSummary />
    </main>
  );
}
