export const Nav = function ({
  call,
  click,
}: {
  call: boolean;
  click: () => void;
}) {
  return (
    <section
      className={`fixed z-20 my-4 right-0 left-0 bg-white transition-all duration-300 md:hidden`}
    >
      <div
        className={`overflow-hidden transition-all duration-300 ${
          call ? `max-h-screen` : `max-h-0`
        }`}
      >
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </div>
    </section>
  );
};
