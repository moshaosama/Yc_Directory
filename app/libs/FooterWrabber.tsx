"use client";

import { usePathname } from "next/navigation";
import Footer from "../Components/Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (pathname?.includes("/user")) {
    return null;
  }

  return <Footer />;
}
