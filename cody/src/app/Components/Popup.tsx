import solution_list from "./list/solution_list";
import { Button } from "@mui/material";
import Solution_Item from "./Solution_Item";

interface PopupProps {
  onClose: () => void;
}
const Popup = function ({ onClose }: PopupProps) {
  return (
    <section className="fixed inset-0 z-10 bg-white w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col">
      <div className="flex justify-center items-center p-4">
        <span className="font-bold text-3xl">Шийдлүүд</span>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </div>
      <div className="w-full p-8 flex justify-around flex-wrap overflow-scroll">
        {solution_list.map((item) => (
          <Solution_Item
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Popup;
