import React from "react";

export const Aritcle = function ({
  children,
  attr,
}: {
  children: React.ReactNode;
  attr: any;
}) {
  return (
    <section
      className="h-[800px] bg-cover bg-center z-0 drop-shadow-2xl"
      style={{
        backgroundImage: `url(${attr})`,
      }}
    >
      {children}
    </section>
  );
};
