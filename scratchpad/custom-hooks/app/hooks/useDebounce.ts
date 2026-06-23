import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 500) => {
  const [heldVal, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounce(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return heldVal;
};
