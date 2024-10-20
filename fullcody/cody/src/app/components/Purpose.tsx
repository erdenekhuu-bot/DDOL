import maps from "../../app/images/map.jpg";

export const Purpose = function () {
  return (
    <section
      className="h-[600px] bg-cover"
      style={{
        backgroundImage: `url(${maps.src})`,
      }}
    >
      <p className="font-bold text-3xl text-center py-6">Бидний зорилго</p>
      <div className="flex justify-center my-8">
        <p className="text-[50px] text-center w-[90%]">
          Дэвшилтэд шийдэл, технологиор дамжуулан мянга мянган бизнест боломжийг
          нээж өгнө.
        </p>
      </div>
    </section>
  );
};
