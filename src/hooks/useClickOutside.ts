import { useEffect, useRef } from "react";

export function useClickOutside(cb: () => void) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (
        e.target &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        cb();
      }
    }

    document.addEventListener("click", clickOutside);

    return () => document.removeEventListener("click", clickOutside);
  }, [cb]);

  return containerRef;
}
