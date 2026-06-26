import { useState } from "react";
import "./Hero.css";
import hero from "../../assets/images/hero.png";
import FloatingCards from "./FloatingCards";
import { Leaf, ArrowRight } from "lucide-react";
import Button from "../common/Button";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

const handleMouseMove = (e) => {
  const { clientX, clientY } = e;

  const x = (clientX - window.innerWidth / 2) / 40;
  const y = (clientY - window.innerHeight / 2) / 40;

  setMousePosition({ x, y });
};
  return (
    <section
  className="hero"
  id="home"
  onMouseMove={handleMouseMove}
>

      {/* LEFT SIDE */}

      <div className="hero-left">

        <div className="hero-content">

          <p className="hero-tag">
    <Leaf size={18} />
    Sustainable Living Starts Here
</p>

          <h1>
  Grow a
  <br />
  <span>Greener Future</span>
  <br />
  Together
</h1>

          <p className="hero-description">
            Discover beautifully crafted eco-friendly products that
            reduce waste, protect nature, and make everyday living
            a little more sustainable.
          </p>

          <div className="hero-stats">

            <div>
              <h3>250K+</h3>
              <p>Products Sold</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Eco Certified</p>
            </div>

            <div>
              <h3>25+</h3>
              <p>Countries</p>
            </div>

          </div>

          <div className="hero-buttons">

            <Button
variant="primary"
icon={<ArrowRight size={18} />}
>
Explore Products
</Button>

<Button
variant="secondary"
>
Our Mission
</Button>

            
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

    <div className="hero-glow"></div>

    <div className="hero-orbit"></div><FloatingCards />
    <div className="leaf leaf1"></div>
<div className="leaf leaf2"></div>
<div className="leaf leaf3"></div>

    <div
  className="hero-image-wrapper"
  style={{
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
  }}
>

        <img
            src={hero}
            alt="Hero"
            className="hero-image"
        />

    </div>

</div>
    </section>
  );
}

export default Hero;