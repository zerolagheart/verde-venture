import "./GlobalImpact.css";
import worldMap from "../../assets/images/world-map.svg";

function GlobalImpact() {
  return (
    <section className="global-impact" id="global-impact">

      <h2>Making an Impact Worldwide</h2>

      <p>
        Sustainable products reaching eco-conscious people
        across the globe.
      </p>

      <div className="map-container">

        <img
          src={worldMap}
          alt="World Map"
          className="world-map"
        />

        <div
          className="marker india"
          title="India"
        ></div>

        <div
          className="marker germany"
          title="Germany"
        ></div>

        <div
          className="marker usa"
          title="USA"
        ></div>

        <div
          className="marker uk"
          title="United Kingdom"
        ></div>

        <div
          className="marker korea"
          title="South Korea"
        ></div>

      </div>

    </section>
  );
}

export default GlobalImpact;