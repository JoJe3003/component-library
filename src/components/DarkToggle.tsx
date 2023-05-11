import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function DarkToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled
          ? "bg-sky-900 ring-2 ring-sky-950"
          : "bg-sky-300 ring-2 ring-sky-400"
      } relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-500 focus:outline-none`}
    >
      <span className="sr-only">Enable/Disable dark mode</span>
      <span
        className={`${
          enabled
            ? "translate-x-6 bg-slate-200 outline outline-1 outline-slate-300"
            : "translate-x-1 bg-yellow-200 outline outline-1 outline-yellow-300"
        } inline-block h-4 w-4 rounded-full bg-white transition-all duration-500`}
      />
    </Switch>
  );
}
