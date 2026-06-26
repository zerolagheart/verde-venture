import "./ProductCard.css";
import { motion } from "framer-motion";

function ProductCard({ image, title, description, price }) {
  return (
    <motion.div
      className="product-card"
      whileHover={{
        y: -12,
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
      }}
    >
      <div className="eco-badge">

Eco Certified

</div>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="product-bottom">
          <span>{price}</span>

          <button>Buy Now →</button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;