const solution_item = function ({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="w-[380px]">
      <div className="text-purple-600 font-bold text-2xl">{title}</div>
      <div className="my-4">
        <span>{content}</span>
      </div>
    </div>
  );
};

export default solution_item;
