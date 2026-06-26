import SectionTitle from "../common/SectionTitle";
import "./ProductSection.css";

import ProductCard from "./ProductCard";
import bottle from "../../assets/images/products/bottle.png";
import lamp from "../../assets/images/products/lamp.png";
import planter from "../../assets/images/products/planter.png";

import { motion } from "framer-motion";


function ProductSection() {

  return (

   <motion.section

className="products"

id="products"

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{

duration:.8

}}

>

      <SectionTitle

title="Featured Products"

subtitle="Sustainable essentials designed for modern living."

/>

      <div className="products-grid">

        <ProductCard
          title="Eco Bottle"
          description="Reusable insulated bottle."
          price="$39"
          image={bottle}
        />

        <ProductCard
          title="Plant Pot"
          description="Minimal ceramic planter."
          price="$49"
          image={planter}
        />

        <ProductCard
          title="Eco Lamp"
          description="Smart sustainable lighting."
          price="$79"
          image={lamp}
        />

      </div>

    </motion.section>
  );

}

export default ProductSection;