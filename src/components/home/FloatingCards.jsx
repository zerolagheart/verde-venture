import "./FloatingCards.css";
import {
    Leaf,
    Recycle,
    Globe
} from "lucide-react";
function FloatingCards() {
  return (
    <div className="floating-cards">

      <div className="floating-card card1">
        <h4>
    <Leaf size={20} />
    Carbon Neutral
</h4>
        <p>Certified Products</p>
      </div>

      <div className="floating-card card2">
        <h4>
    <Recycle size={20} />
    100% Recycled
</h4>
        <p>12,500 kg Waste Saved</p>
      </div>

      <div className="floating-card card3">
        <h4>
    <Globe size={20} />
    Global Impact
</h4>
        <p>25+ Countries</p>
      </div>

    </div>
  );
}

export default FloatingCards;