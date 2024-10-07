const Solution_Item = function ({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="m-8 md:w-[40%]">
      <div className="text-purple-600 font-bold text-xl md:text-2xl">
        {title}
      </div>
      <div className="my-4">
        <span className="text-[16px] md:text-xl">{content}</span>
      </div>
    </div>
  );
};

export default Solution_Item;
