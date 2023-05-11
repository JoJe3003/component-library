import Image from "next/image";
import { useState } from "react";

export default function PaymentCard() {
  const [cardNumberSlot1, setCardNumberSlot1] = useState<number | undefined>();
  const [cardNumberSlot2, setCardNumberSlot2] = useState<number | undefined>();
  const [cardNumberSlot3, setCardNumberSlot3] = useState<number | undefined>();
  const [cardNumberSlot4, setCardNumberSlot4] = useState<number | undefined>();
  const [cardNumber, setCardNumber] = useState<number | undefined>();
  const [cardHolder, setCardHolder] = useState<string | undefined>();
  const [cardMonth, setCardMonth] = useState<number | undefined>();
  const [cardYear, setCardYear] = useState<number | undefined>();
  const [cardCVC, setCardCVC] = useState<number | undefined>();

  return (
    <div className="relative aspect-[1.59] w-96 rounded-lg bg-white shadow-lg">
      <div className="mt-[75px] flex items-center pl-9">
        <div className="h-11 w-14 rounded-lg border border-black bg-gradient-to-tr from-gray-400 to-gray-300"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 scale-50">
          <path
            fill="none"
            stroke="#AAA"
            strokeWidth="6"
            strokeLinecap="round"
            d="m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5 0 0,1 0,28.5M3,19a18,17 0 0,1 0,18"
          />
        </svg>
      </div>
      <form action="" className="my-2 ml-9 space-x-2">
        {[...Array(4)].map((_, i) => (
          <input
            key={`cardNumberSlot${i + 1}`}
            value={`cardNumberSlot${i + 1}`}
            id={`cardNumberSlot${i + 1}`}
            type="number"
            min="0"
            onKeyDown={(e) => {
              // if key up or down, prevent default
              if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
              }
            }}
            onWheel={(e) => {
              // use blur to prevent scrolling
              e.currentTarget.blur();
            }}
            onInput={(e) => {
              if (e.currentTarget.value.length === 4) {
                e.currentTarget.blur();
                document.getElementById(`cardNumberSlot${i + 2}`)?.focus();
              }
            }}
            className="w-[4.55rem] rounded-md border-gray-200 bg-transparent px-1 py-0 text-2xl tracking-wider [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        ))}

        {cardNumber}

        {/* <input
          value={cardNumber?.slice(0, 4)}
          id="cardNumber1"
          type="number"
          min="0"
          onKeyDown={(e) => {
            // if key up or down, prevent default
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
            }
          }}
          onWheel={(e) => {
            // use blur to prevent scrolling
            e.currentTarget.blur();
          }}
          onInput={(e) => {
            // if there are 4 digits, tab to next input field
            if (e.currentTarget.value.length === 4) {
              e.currentTarget.blur();
              document.getElementById("cardNumber2")?.focus();
            }
          }}
          //   if (e.currentTarget.value.length > 4) {
          //     return;
          //   } else {
          //     setCardNumber(e.currentTarget.value);
          //   }
          // }}
          className="w-[4.55rem] rounded-md border-gray-200 bg-transparent px-1 py-0 text-2xl tracking-widest [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <input
          value={cardNumber?.slice(4, 8)}
          id="cardNumber2"
          type="number"
          min="0"
          onKeyDown={(e) => {
            // if key up or down, prevent default
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
            }
          }}
          onWheel={(e) => {
            // use blur to prevent scrolling
            e.currentTarget.blur();
          }}
          onInput={(e) => {
            // if there are 4 digits, tab to next input field
            if (e.currentTarget.value.length === 4) {
              e.currentTarget.blur();
              document.getElementById("cardNumber3")?.focus();
            }
          }}
          //   if (e.currentTarget.value.length > 4) {
          //     return;
          //   } else {
          //     setCardNumber(e.currentTarget.value);
          //   }
          // }}
          className="w-[4.55rem] rounded-md border-gray-200 bg-transparent px-1 py-0 text-2xl tracking-widest [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        /> */}
      </form>

      {/* <Image
        className="absolute left-0 top-0 scale-105 opacity-50"
        src="/sbanken_konsept_debitkort.jpeg"
        alt="Picture of a credit card"
        width={600}
        height={420}
      /> */}
    </div>
  );
}
