import "./ImpactCard.css";

function ImpactCard({ icon, number, title, color }) {
  return (
    <div className="impact-card">

      <div
        className="impact-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <h2>{number}</h2>

      <p>{title}</p>

    </div>
  );
}

export default ImpactCard;