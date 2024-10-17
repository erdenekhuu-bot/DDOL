import Link from "next/link";
import { slide } from "@/app/types/type";

export const Images = function ({ arr }: any) {
  return (
    <Link href={arr.url} target="_blank">
      <img
        src={`http://127.0.0.1:1337${arr.image.formats.thumbnail.url}`}
        alt=""
        width={800}
        height={800}
        className="w-16 mx-4"
      />
    </Link>
  );
};
