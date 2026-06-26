import "./Trusted.css";

const brands = [
  "PATAGONIA",
  "TESLA",
  "IKEA",
  "SPOTIFY",
  "ECOSIA",
  "WHO"
];

function Trusted() {
  return (
    <section className="trusted">

      <p>
        Trusted by <span>50,000+</span> eco-conscious customers
      </p>

      <div className="trusted-track">

        {brands.map((brand) => (
          <div className="brand" key={brand}>
            {brand}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Trusted;