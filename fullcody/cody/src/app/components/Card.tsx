export const Card = function ({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="w-[450px] m-8 mobilecustom:w-[500px] mobilecustom:my-4">
      <p className="my-6 text-3xl font-bold text-customlabel mobilecustom:text-xl mobilecustom:my-2">
        {title}
      </p>
      <p className="text-xl mobilecustom:text-sm ">{content}</p>
    </div>
  );
};
