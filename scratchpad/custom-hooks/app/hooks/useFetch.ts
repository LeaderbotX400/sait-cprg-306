/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

export const useFetch = (url: Parameters<typeof fetch>["0"]) => {
  const [error, setError] = useState<string | Error | null>(null);
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) {
      setData(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const runFetch = async () => {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Request Failed: ${res.status}`);

      const data = await res.json();

      setData(data);
    };

    runFetch();
  }, [url]);

  const result = Object.assign([data, loading, error] as const, {
    data,
    loading,
    error,
  });
  return result;
};
