import { SvgIcon } from "@mui/material";
import Opportunity_item from "../Opportunity_item";
import opportunity_list from "../list/opportunity_list";

const FifthSection = function () {
  return (
    <section className="flex justify-around flex-wrap bg-gray-200 p-8">
      {opportunity_list.map((item) => (
        <Opportunity_item
          key={item.id}
          image={item.id}
          title={item.title}
          feature={item.feature}
        />
      ))}
    </section>
  );
};

export default FifthSection;
