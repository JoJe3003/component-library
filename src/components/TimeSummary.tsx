import { useEffect, useState } from "react";

interface Time {
  hours: number;
  minutes: number;
}

export default function TimeSummary() {
  const [time, setTime] = useState<Time[]>([]);
  const [sum, setSum] = useState<Time>({ hours: 0, minutes: 0 });
  const [focus, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

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
    <div>
      <div className="flex scale-[2] gap-4">
        <div className="relative">
          <textarea
            id="input"
            name="input"
            inputMode="numeric"
            placeholder="Enter time.."
            onInput={handleTextAreaInput}
            onFocus={onFocus}
            onBlur={onBlur}
            // make spaces in the input area into "\n"
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
                e.currentTarget.value += "\n";
              }
              // dont allow any other symbols than numbers and "\n"
              if (
                !(
                  (e.key >= "0" && e.key <= "9") ||
                  e.key === "Backspace" ||
                  e.key === "Enter" ||
                  e.key === " " ||
                  e.key === "ArrowUp" ||
                  e.key === "ArrowDown" ||
                  e.key === "ArrowLeft" ||
                  e.key === "ArrowRight" ||
                  e.key === "Tab" ||
                  e.key === "Delete" ||
                  e.key === "Home" ||
                  e.key === "End" ||
                  e.key === "PageUp" ||
                  e.key === "PageDown" ||
                  e.ctrlKey === true
                )
              ) {
                e.preventDefault();
              }
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\n\n/g,
                  "\n"
                );
              }
              // dont allow first entry to be "\n"
              if (e.currentTarget.value === "\n") {
                e.currentTarget.value = "";
              }
            }}
            className="h-full w-24 resize-none overflow-hidden rounded-sm border-0 py-1.5 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-sm placeholder:text-gray-400 placeholder-shown:h-8 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [&::-webkit-resizer]:hidden"
          />
          {time.length > 0 && (
            <span className="absolute -bottom-6 left-11 min-w-max text-right text-sm text-gray-400">
              Rows: {time.length}
            </span>
          )}
        </div>
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

      {/* Mobile view */}

      <button
        className="absolute bottom-4 right-4 block rounded-sm bg-indigo-600 px-4 py-3 text-xl text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:hidden"
        onClick={() => {
          const input = document.getElementById("input") as HTMLTextAreaElement;
          input.value += "\n";
          input.focus();

          // dont allow multiple "\n" in a row
          input.value = input.value.replace(/\n\n/g, "\n");
          // Dont allow first input to be "\n"
          if (input.value === "\n") {
            input.value = "";
          }
        }}
      >
        New Line
      </button>
    </div>
  );
}
