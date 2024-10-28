import Link from "next/link";

export const Images = function ({ arr }: any) {
  return (
    <Link href={arr.url} target="_blank">
      <img
        src={arr.image}
        alt=""
        width={800}
        height={800}
        className="w-16 mx-4"
      />
    </Link>
  );
};
