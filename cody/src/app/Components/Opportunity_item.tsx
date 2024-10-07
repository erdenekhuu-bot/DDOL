import opportunity_list from "./list/opportunity_list";
import { subitems } from "../types/header_type";
import { Popup } from "./Popup";

const Opportunity_item = function ({ id, image, title, feature }: subitems) {
  return (
    <div className="w-52 h-60 bg-white rounded-3xl p-5 m-4">
      <div className="w-14 h-14 bg-purple-900 rounded-lg text-white font-bold flex justify-center items-center">
        {image}
      </div>
      <section className="flex flex-col justify-between">
        <div className="py-3">
          <b className="text-xl">{title}</b>
        </div>
        <div className="flex justify-end my-3">
          <span className="">{feature}</span>
        </div>
      </section>
    </div>
  );
};

export default Opportunity_item;
