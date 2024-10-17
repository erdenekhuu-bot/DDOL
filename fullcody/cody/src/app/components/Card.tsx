export const Card = function ({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="w-[450px] m-8 mobilecustom:w-[500px]">
      <p className="my-6 text-3xl">{title}</p>
      <p className="text-xl">{content}</p>
    </div>
  );
};
