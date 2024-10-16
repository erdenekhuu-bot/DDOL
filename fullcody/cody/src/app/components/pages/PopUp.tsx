import { navList } from "@/app/json/objects";
import { navlink } from "@/app/types/type";

export const Nav = function ({
  call,
  click,
}: {
  call: boolean;
  click: () => void;
}) {
  return (
    <section
      className={`fixed z-20 my-4 right-0 left-0 bg-white transition-all duration-300 md:hidden`}
    >
      <div
        className={`overflow-hidden transition-all duration-300 ${
          call ? `max-h-screen` : `max-h-0`
        }`}
      >
        <div></div>
      </div>
    </section>
  );
};
