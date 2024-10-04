import Stack from "@mui/material/Stack";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FirstSection from "./Components/home/FirstSection";
import SecondSection from "./Components/home/SecondSection";
import ThirdSection from "./Components/home/ThirdSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Stack>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </Stack>
      <Footer />
    </main>
  );
}
