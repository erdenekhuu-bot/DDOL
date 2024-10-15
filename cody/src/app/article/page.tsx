"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ga4 from "../../app/images/ga4.jpg";

const Article = function () {
  return (
    <section
      className="h-[800px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${ga4.src})`,
      }}
    >
      <div>Article</div>
    </section>
  );
};

export default Article;
