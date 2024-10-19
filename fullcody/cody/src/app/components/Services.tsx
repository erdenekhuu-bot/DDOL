import { services } from "../json/objects";

export const Services = function () {
  return (
    <section className="bg-gray-50 py-8 z-0">
      <p className="font-bold text-center py-6 text-3xl">Бидний тухай</p>
      <div className="flex flex-wrap justify-evenly">
        {services.map((items) => (
          <div
            key={items.id}
            className="relative w-[200px] m-4 h-[200px] rounded-lg"
          >
            <p className="font-bold text-[60px] text-purple-700">0</p>
            <p className="absolute font-bold text-[60px] top-0 left-9 z-20 text-purple-700">
              {items.id + "."}
            </p>
            <div className="absolute bg-white rounded-xl w-[90%] h-[90%] top-10 left-8 z-10 drop-shadow-xl flex items-center">
              <b className="text-center">{items.service}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
