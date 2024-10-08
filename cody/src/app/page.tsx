import Stack from "@mui/material/Stack";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FirstSection from "./Components/pages/FirstSection";
import SecondSection from "./Components/pages/SecondSection";
import ThirdSection from "./Components/pages/ThirdSection";
import FourthSection from "./Components/pages/FourthSection";
import FifthSection from "./Components/pages/FifthSection";
import SixthSection from "./Components/pages/SixthSection";
import SeventhSection from "./Components/pages/SeventhSection";

export default async function Home() {
  return (
    <main className="bg-gray-50">
      <Header />
      <Stack>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </Stack>
      <Footer />
    </main>
  );
}
