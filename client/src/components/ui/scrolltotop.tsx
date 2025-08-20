import { useEffect } from "react";
import { useLocation } from "wouter";
import { getLenis } from "@/lib/lenis";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    lenis.scrollTo(0, { immediate: true }); 
  }, [location]);

  return null;
}