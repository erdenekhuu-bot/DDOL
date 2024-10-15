"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import career from "../../app/images/career.jpg";

const Career = function () {
  return (
    <section
      className="h-[800px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${career.src})`,
      }}
    >
      <div>About</div>
    </section>
  );
};

export default Career;
