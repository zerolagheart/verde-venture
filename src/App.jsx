import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Background from "./components/common/Background";
import ProductSection from "./components/home/ProductSection";
import Trusted from "./components/home/Trusted";
import Impact from "./components/home/Impact";
import Timeline from "./components/home/Timeline";
import CursorGlow from "./components/common/CursorGlow";
import ScrollProgress from "./components/common/ScrollProgress";
import GlobalImpact from "./components/home/GlobalImpact";
import Testimonials from "./components/home/Testimonials";
import Newsletter from "./components/home/Newsletter";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
<ScrollProgress/>

      <CursorGlow />

      <Background />

      <Navbar />

      <Hero />

       <Trusted />

      <ProductSection />

      <Impact />

      <Timeline />

      <GlobalImpact />
<Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;