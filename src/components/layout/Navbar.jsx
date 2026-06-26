import "./Navbar.css";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* Logo */}

      <a href="#home" className="logo">
        <span className="logo-icon">🌿</span>
        <span className="logo-text">VERDE VENTURE</span>
      </a>

      {/* Navigation */}

     <ul className="links">

<li>
<a
href="#home"
className={active==="home" ? "active" : ""}
onClick={()=>setActive("home")}
>
Home
</a>
</li>

<li>
<a
href="#products"
className={active==="products" ? "active" : ""}
onClick={()=>setActive("products")}
>
Products
</a>
</li>

<li>
<a
href="#impact"
className={active==="impact" ? "active" : ""}
onClick={()=>setActive("impact")}
>
Impact
</a>
</li>

<li>
<a
href="#timeline"
className={active==="timeline" ? "active" : ""}
onClick={()=>setActive("timeline")}
>
Journey
</a>
</li>

<li>
<a
href="#testimonials"
className={active==="testimonials" ? "active" : ""}
onClick={()=>setActive("testimonials")}
>
Reviews
</a>
</li>

<li>
<a
href="#contact"
className={active==="contact" ? "active" : ""}
onClick={()=>setActive("contact")}
>
Contact
</a>
</li>

</ul>

      {/* CTA */}

      <a href="#products" className="shop-btn">
    Shop Now
    <ArrowRight size={18} strokeWidth={2.5} />
</a>

    </nav>
  );
}

export default Navbar;