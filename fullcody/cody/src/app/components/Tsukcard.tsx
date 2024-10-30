import Image from "next/image";

export const Tsukcard = function ({
  tsuk,
  content,
}: {
  tsuk: any;
  content: string;
}) {
  return (
    <div className="relative hover:drop-shadow-xl">
      <Image src={tsuk} alt="" width={800} height={800} className="w-60 z-10" />
      <p className="absolute top-24 left-14 font-bold px-2">{content}</p>
    </div>
  );
};
