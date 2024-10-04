const Solution_Item = function ({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="w-[380px] m-8">
      <div className="text-purple-600 font-bold text-2xl">{title}</div>
      <div className="my-4">
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Solution_Item;
