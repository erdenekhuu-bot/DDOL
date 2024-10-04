import opportunity_list from "./list/opportunity_list";

const Popup = function () {
  return (
    <section className="z-10 bg-transparent w-[90%] h-[90%] rounded-lg">
      <div>Title</div>
      <div className="w-full p-8 overflow-scroll">
        <div></div>
      </div>
    </section>
  );
};

export default Popup;
