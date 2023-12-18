"use client";
import { useEffect, useRef } from "react";

const useClickOutside = (closeFunc: () => void) => {
  // hooks
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        closeFunc();
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, closeFunc]);

  return ref;
};

export default useClickOutside;
