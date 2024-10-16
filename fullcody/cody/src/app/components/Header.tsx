import Image from "next/image";
import cody from "../images/cody.svg";
import Link from "next/link";
import { Button } from "@mui/material";
import { navList } from "../json/objects";

export const Header = function () {
  return (
    <header className="fixed w-full bg-white z-20 p-4 drop-shadow-2xl">
      <nav className="flex justify-between items-center navcustom:block">
        <Image
          src={cody}
          alt=""
          width={800}
          height={800}
          className="w-32 navcustom:w-44"
        />
        <div className="flex items-center justify-between navcustom:flex navcustom:items-center navcustom:justify-between">
          {navList.map((items) => (
            <div key={items.id} className="mx-2">
              <p className="font-bold text-sm text-gray-800 ">{items.title}</p>
            </div>
          ))}
          <Button
            variant="contained"
            className="px-4 py-2 text-[12px] rounded-lg"
            style={{
              background:
                "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);",
            }}
          >
            Холбоо барих
          </Button>
        </div>
      </nav>
    </header>
  );
};
