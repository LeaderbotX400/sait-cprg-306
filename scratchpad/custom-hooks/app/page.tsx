"use client";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";

export default function Home() {
  const [value, setValue] = useLocalStorage("silly");
  return (
    <div className="w-full h-svh grid items-center justify-center">
      <input
        type="text"
        className="border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span>{value}</span>
    </div>
  );
}
