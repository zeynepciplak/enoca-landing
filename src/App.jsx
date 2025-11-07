import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import Contact from "./sections/Contact/Contact";
import FAQ from "./sections/FAQ/FAQ";
import Features from "./sections/Features/Features";
import Hero from "./sections/Hero/Hero";
import Pricing from "./sections/Pricing/Pricing";


function App() {
  return (
    <>
    <ThemeSwitcher/>
    <Hero/>
    <Features/>
    <Pricing/>
    <FAQ/>
    <Contact/>
    </>
  );
}

export default App;
