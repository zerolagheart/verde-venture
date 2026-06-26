import "./Impact.css";

import ImpactCard from "./ImpactCard";

function Impact() {

  return (

    <section className="impact" id="impact">

      <h2>
        Our Environmental Impact
      </h2>

      <p>
        Small everyday choices create extraordinary global change.
      </p>

      <div className="impact-grid">

        <ImpactCard
          icon="🌱"
          number="250K+"
          title="Eco Products Delivered"
          color="rgba(78,143,99,.25)"
        />

        <ImpactCard
          icon="♻️"
          number="18M"
          title="Plastic Bottles Saved"
          color="rgba(221,184,84,.25)"
        />

        <ImpactCard
          icon="🌍"
          number="25+"
          title="Countries Impacted"
          color="rgba(120,180,255,.22)"
        />

        <ImpactCard
          icon="🌳"
          number="98%"
          title="Carbon Neutral Shipping"
          color="rgba(100,200,120,.22)"
        />

      </div>

    </section>

  );

}

export default Impact;