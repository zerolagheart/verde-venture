import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter" id="contact">

      <div className="newsletter-card">

        <span className="newsletter-tag">
          🌿 Join Our Community
        </span>

        <h2>
          Stay Updated with
          <span> Verde Venture</span>
        </h2>

        <p>
          Receive sustainability tips, exclusive offers,
          and updates about our environmental impact.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;