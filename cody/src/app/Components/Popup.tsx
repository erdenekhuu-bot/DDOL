import opportunity_list from "./list/opportunity_list";

const Popup = function () {
  return (
    <section className="absolute inset-0 top-0 bottom-0 right-0 left-0 z-10 bg-white w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col">
      <div className="my-4">
        <span className="font-bold text-3xl">Шийдлүүд</span>
      </div>
      <div className="w-full p-8 overflow-scroll">
        <div>Your content here</div>
      </div>
    </section>
  );
};

export default Popup;
