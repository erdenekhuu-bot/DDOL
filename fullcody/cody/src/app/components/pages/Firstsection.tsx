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
      className="h-[700px] bg-no-repeat bg-cover flex justify-around items-center mobilecustom:block mobilecustom:mt-20"
      style={{
        backgroundImage: `url(${background_img.src})`,
      }}
    >
      {children}
    </section>
  );
};
