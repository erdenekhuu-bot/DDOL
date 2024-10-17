import React from "react";

export const Firstsection = function ({
  children,
  background_img,
}: {
  children: React.ReactNode;
  background_img: any;
}) {
  return (
    <section
      className="pt-36 bg-no-repeat bg-cover flex justify-around items-center mobilecustom:block mobilecustom:pt-24"
      style={{
        backgroundImage: `url(${background_img.src})`,
      }}
    >
      {children}
    </section>
  );
};
