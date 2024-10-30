import { Cards } from "../components/pages/Fifthsection";

export const Whycody = function ({ data }: { data: any }) {
  return (
    <div className="">
      <p className="text-2xl font-bold py-8 text-center">Яагаад Коди гэж?</p>
      <div className="flex justify-evenly flex-wrap">
        {data.map((items: any, index: number) => (
          <Cards
            key={items.id}
            icon={items.url}
            title={items.reason}
            customcolor={items.customcolor}
          />
        ))}
      </div>
    </div>
  );
};
