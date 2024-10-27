"use client";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function test() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <section className="h-[1000px] flex justify-center items-center">
      <div
        className="flex w-full space-x-10 overflow-x-scroll scrollbar-hide"
        {...events}
        ref={ref}
      >
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
        <div className="flex-none w-52 h-32 bg-red-200" />
      </div>
    </section>
  );
}
