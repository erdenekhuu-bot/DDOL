import Image from "next/image";
import career from "../images/career.jpg";

const Career = function () {
  return (
    <section
      className="h-[800px] bg-cover bg-center bg-gradient-to-bl "
      style={{
        backgroundImage: `url(${career.src})`,
      }}
    >
      <div>About</div>
    </section>
  );
};

export default Career;
