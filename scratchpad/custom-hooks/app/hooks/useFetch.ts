"use client";
import { useState, useEffect } from "react";

export const useFetch = (url: string | null) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //Guard
    if (!url) {
      setData(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        //
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((error) => {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
