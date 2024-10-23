"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";

export const Customcard = function ({
  clicking,
  icon,
  title,
}: {
  clicking: () => void;
  icon: string;
  title: string;
}) {
  return (
    <section
      onClick={clicking}
      className="flex hover:cursor-pointer items-center p-4"
    >
      <img
        className="mx-4"
        width={20}
        height={20}
        src={`http://127.0.0.1:1337${icon}`}
        alt=""
      />
      <p className="font-bold text-opacity-60 hover:text-purple-500">{title}</p>
    </section>
  );
};

export const Openjobs = function () {
  return (
    <section>
      <p className="text-2xl font-bold py-8 text-center">Нээлттэй ажлын байр</p>
      <div></div>
    </section>
  );
};
