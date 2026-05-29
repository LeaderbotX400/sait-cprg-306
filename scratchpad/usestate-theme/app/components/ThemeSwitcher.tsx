"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  // TODO 1: Declare a boolean state variable called `isDark`

  //         Use explicit TypeScript typing: useState<boolean>

  //         Initial value: false (light mode by default)

  const [isDark, setDark] = useState<boolean>(
    Boolean(localStorage.getItem("theme")) || false,
  );

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(count + 1);
  }, [isDark]);

  function toggleTheme() {
    // TODO 2: Toggle isDark when this function is called

    setDark(!isDark);

    localStorage.setItem("isDark", `${!isDark}`);
  }

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        // TODO 3: Ternary to apply Tailwind classes based on isDark

        //         Dark:  'bg-gray-900 text-gray-100'

        //         Light: 'bg-gray-100 text-gray-900'

        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">Theme Switcher</h1>

      <p className="mb-6">
        {/* TODO 4: Show 'Dark Mode' or 'Light Mode' based on isDark */}
        Current theme: {isDark ? "Dark" : "Light"} Mode
      </p>

      {/* TODO 5: Wire onClick to call toggleTheme */}

      <div className="grid gap-3 max-w-lg text-center">
        <button
          className="px-4 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={toggleTheme}
        >
          {/* TODO 6 (Bonus): Dynamic label */}
          Toggle Theme
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
}
