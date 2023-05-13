import ResultSummary from "@/components/ResultSummary";
import DarkToggle from "@/components/DarkToggle";
import PaymentCard from "@/components/PaymentCard";
import TimeSummary from "@/components/TimeSummary";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100">
      <div className="rounded-md border bg-white p-4">
        {/* <ResultSummary /> */}
        {/* <DarkToggle /> */}
        {/* <PaymentCard /> */}
        <TimeSummary />
      </div>
    </main>
  );
}
