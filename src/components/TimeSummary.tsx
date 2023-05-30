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
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // make spaces in the input area into "\n"
    if (e.key === " ") {
      e.preventDefault();
      e.currentTarget.value += "\n";
    }

    // make a map of 10 keys, where the keys are the letters u, i, o, j, k, l, n, m, ",", "." corresponding to the numbers 1-9, 0
    const numPadMap = {
      u: "1",
      i: "2",
      o: "3",
      j: "4",
      k: "5",
      l: "6",
      n: "0",
      m: "7",
      ",": "8",
      ".": "9",
    };

    // if the key pressed is in the map, replace the key with the corresponding value
    if (e.key in numPadMap) {
      e.preventDefault();
      e.currentTarget.value += numPadMap[e.key];
      // update the state
      handleTextAreaInput(e);
    }

    // dont allow any inputs other than the list below
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
        e.ctrlKey === true ||
        e.metaKey === true
      )
    ) {
      e.preventDefault();
    }
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // remove whitespace from the input area
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value.replace(/\n\n/g, "\n");
    }
    // dont allow first entry to be "\n"
    if (e.currentTarget.value === "\n") {
      e.currentTarget.value = "";
    }
  };

  return (
    <div>
      <div className="flex items-stretch">
        <div className="flex">
          <textarea
            id="input"
            name="input"
            placeholder="Enter time..."
            onInput={handleTextAreaInput}
            onKeyDown={handleOnKeyDown}
            onKeyUp={handleOnKeyUp}
            className="h-full w-32 resize-none overflow-hidden rounded-sm border-0 py-0 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-left placeholder:text-gray-400 placeholder-shown:h-9 placeholder-shown:w-32 placeholder-shown:py-1.5 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:leading-6 "
          />
        </div>
        {time.length > 0 && (
          <div className="ml-4 overflow-hidden rounded-t-sm">
            {time.map((time, i) => (
              <div
                key={i}
                className="flex justify-end px-1 text-right odd:bg-gray-200"
              >
                <span className={i == 0 ? `hidden` : `mr-auto`}>+</span>
                <span className="ml-1 flex">
                  <span>{time.hours}h</span>
                  <span className="w-9">{time.minutes}m</span>
                </span>
              </div>
            ))}

            <div>
              <hr className="border-t-1 border-black" />
              <div className="flex justify-end border-b-4 border-double border-black px-1 text-right">
                <span className="mr-auto">=</span>
                <span className="ml-1 flex">
                  <span>{sum.hours}h</span>
                  <span className="w-9">{sum.minutes}m</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {time.length > 0 && (
        <span className="text-xs text-gray-400">Rows: {time.length}</span>
      )}
    </div>
  );
}
