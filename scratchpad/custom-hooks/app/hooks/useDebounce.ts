"use client";
import React from "react";
import { useState, useEffect } from "react";

const useDebounce = (value: string, delay = 500): string => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounce;
};

export default useDebounce;
