"use client";

import { memo, useEffect, useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (next: string) => void;
  onClear: () => void;
}

const Searbar = ({ value, onChange, onClear }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex gap-2">
      <input
        ref={inputRef} // attaches the Dom Node to inputRef.current
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search a github username"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
      />
      <button
        onClick={() => {
          onClear();
          inputRef.current?.focus(); // refocus after clearing - small UX touch
        }}
        className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 hover:bg-gray-200"
      >
        Clear
      </button>
    </div>
  );
};

export default Searbar;
