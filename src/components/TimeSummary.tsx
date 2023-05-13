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
    <div className="flex gap-4 scale-[2]">
      <textarea
        id="input"
        name="input"
        contentEditable={true}
        onInput={handleTextAreaInput}
        // make spaces in the input area into "\n"
        onKeyDown={(e) => {
          if (e.key === " ") {
            e.preventDefault();
            e.currentTarget.value += "\n";
          }
        }}
        placeholder="Enter time.."
        className="w-24 overflow-hidden rounded-sm border-0 py-1.5 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-shown:h-8 [&::-webkit-resizer]:hidden"
      />
      <div className="my-1.5 overflow-hidden rounded-t-sm">
        {time.map((time, i) => (
          <div
            key={i}
            className="flex justify-end px-1 text-right odd:bg-gray-200"
          >
            <span className={i == 0 ? `hidden` : `mr-auto`}>+</span>
            <span className="ml-1 flex">
              {time.hours}h<span className="w-9">{time.minutes}m</span>
            </span>
          </div>
        ))}

        {time.length > 0 && (
          <div>
            <hr className="border-t-1 border-black" />
            <div className="flex justify-end border-b-4 border-double border-black px-1 text-right">
              <span className="mr-auto">=</span>
              <span className="ml-1 flex">
                {sum.hours}h<span className="w-9">{sum.minutes}m</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
