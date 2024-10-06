import Stack from "@mui/material/Stack";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FirstSection from "./Components/home/FirstSection";
import SecondSection from "./Components/home/SecondSection";
import ThirdSection from "./Components/home/ThirdSection";
import FourthSection from "./Components/home/FourthSection";
import FifthSection from "./Components/home/FifthSection";
import SixthSection from "./Components/home/SixthSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Stack>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </Stack>
      <Footer />
    </main>
  );
}
