import "./Timeline.css";

const milestones = [
  {
    year: "2019",
    title: "Founded",
    desc: "Started with a mission to reduce single-use plastic.",
  },
  {
    year: "2021",
    title: "50K Customers",
    desc: "Built a community of eco-conscious buyers.",
  },
  {
    year: "2023",
    title: "Carbon Neutral",
    desc: "All deliveries became carbon neutral.",
  },
  {
    year: "2026",
    title: "Global Expansion",
    desc: "Available in over 25 countries worldwide.",
  },
];

function Timeline() {
  return (
    <section className="timeline" id="timeline">

      <h2>Sustainability Journey</h2>

      <div className="timeline-line">

        {milestones.map((item) => (

          <div className="timeline-item" key={item.year}>

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;