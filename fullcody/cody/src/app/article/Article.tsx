import React from "react";

export const Aritcle = function ({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full bg-cover bg-center z-0 drop-shadow-2xl">
      {children}
    </section>
  );
};
