import { subitems } from "../types/type";
import { Stack } from "@mui/material";

const Opportunity_item = function ({ id, image, title, feature }: subitems) {
  return (
    // <div className="w-[11rem] h-[13rem] bg-white rounded-3xl p-4 m-2 md:m-4 md:w-52 md:h-60 hover:shadow-xl hover:cursor-pointer">
    //   <div className="w-14 h-14 bg-purple-900 rounded-lg text-white font-bold flex justify-center items-center">
    //     {image}
    //   </div>
    //   <section className="flex">
    //     <div className="py-3">
    //       <b className="text-xl">{title}</b>
    //     </div>
    //     <div className="flex justify-end">
    //       <span className="text-sm">{feature}</span>
    //     </div>
    //   </section>
    // </div>
    <Stack
      spacing={2}
      className="w-[13rem] h-[15rem] bg-white rounded-3xl p-4 m-2 md:m-4 md:w-52 md:h-60 hover:shadow-xl hover:cursor-pointer"
    >
      <div className="w-14 h-14 bg-purple-900 rounded-lg text-white font-bold flex justify-center items-center">
        {image}
      </div>
      <div className="">
        <b className="text-lg">{title}</b>
      </div>
      <div className="h-8">{""}</div>
      <div className="flex justify-end">
        <span className="text-sm">{feature}</span>
      </div>
    </Stack>
  );
};

export default Opportunity_item;
