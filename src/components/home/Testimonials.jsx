import "./Testimonials.css";

const reviews = [
  {
    name: "Emily Carter",
    role: "Environmental Activist",
    text: "Verde Venture completely changed the way I shop. Beautiful products with a real positive impact."
  },
  {
    name: "Daniel Kim",
    role: "Designer",
    text: "The quality is amazing and I love the sustainability mission behind every purchase."
  },
  {
    name: "Sophia Brown",
    role: "Entrepreneur",
    text: "Finally a brand that combines premium design with eco-friendly values."
  }
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <h2>What Our Customers Say</h2>

      <p>
        Thousands of people are already making sustainable choices.
      </p>

      <div className="testimonial-grid">

        {reviews.map((review, index) => (

          <div className="testimonial-card" key={index}>

            <div className="quote">❝</div>

            <p>{review.text}</p>

            <div className="user">

              <div className="avatar">
                {review.name[0]}
              </div>

              <div>

                <h4>{review.name}</h4>

                <span>{review.role}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;