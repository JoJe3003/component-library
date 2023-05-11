import { useEffect, useState } from "react";

interface Time {
  hours: number;
  minutes: number;
}

export default function TimeSummary() {
  const [time, setTime] = useState<Time[]>([]);
  const [sum, setSum] = useState<Time>({ hours: 0, minutes: 0 });

  useEffect(() => {
    const sum = time.reduce(
      (sum, time) => {
        sum.hours += time.hours;
        sum.minutes += time.minutes;
        if (sum.minutes >= 60) {
          sum.hours++;
          sum.minutes -= 60;
        }
        return sum;
      },
      { hours: 0, minutes: 0 }
    );
    setSum(sum);
  }, [time]);

  const handleTextAreaInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const time = e.currentTarget.value
      .split("\n")
      .filter((string) => string !== "")
      .map((number) => {
        const hours = Number(number.slice(0, -2));
        const minutes = Number(number.slice(-2));
        return { hours, minutes };
      })
      .filter((time) => !isNaN(time.hours) && !isNaN(time.minutes));
    setTime(time);

    // console log every object in the time array
  };

  return (
    <div className="flex gap-4">
      <textarea
        onInput={handleTextAreaInput}
        className="h-96 w-24 text-right"
        // make spaces in the input area into "\n"
        onKeyDown={(e) => {
          if (e.key === " ") {
            e.preventDefault();
            e.currentTarget.value += "\n";
          }
        }}
      />
      <div className="mt-2">
        {time.map((time, i) => (
          <div key={i} className="odd:bg-gray-200">
            {time.hours}h {time.minutes}m
          </div>
        ))}

        {time.length > 0 && (
          <div>
            <hr className="border-t border-black" />
            <div className="border-b-2 border-double border-black">
              {sum.hours}h {sum.minutes}m
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
