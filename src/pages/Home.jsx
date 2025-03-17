import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="container">
        <div className="text-section">
          <h2>
            <span>Welcome to </span>
            <span className="highlight"> FoodSaver</span>
          </h2>
          <p>
            Imagine a world where every grain of food counts, and no meal goes
            to waste. At FoodSaver, we make this vision a reality by bridging
            the gap between surplus food and those in need. We are more than
            just a service; we are a movement committed to creating a sustainable
            and equitable food distribution system. Whether you’re a donor,
            volunteer, or beneficiary, you play a crucial role in this journey.
            Join us to make a difference, one meal at a time.
          </p>
        </div>
        <div className="image-section">
          <img src="food.jpg" alt="Welcome to FoodSaver" />
        </div>
      </div>

      {/* How We Work Section */}
      <div className="container">
        <div className="image-section">
          <img src="intro.png" alt="How We Work" />
        </div>
        <div className="text-section">
          <h2>
            <span>How We </span>
            <span className="highlight">Work</span>
          </h2>
          <p>
            <strong>Step 1: Post Your Request:</strong> Let us know about your
            surplus food. Share specific details like type, quantity, and
            location on our easy-to-use platform. Transparency and accuracy are
            at the core of our process.
          </p>
          <p>
            <strong>Step 2: Accept Availability:</strong> Our team connects your
            request with local volunteers or NGOs. Notifications are sent out
            instantly to ensure timely pickups and minimal waste.
          </p>
          <p>
            <strong>Step 3: Pickup and Deliver:</strong> Once accepted, our team
            ensures safe and hygienic transportation. The food is delivered to
            those in need, bringing hope and nourishment to communities.
          </p>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="container">
        <div className="text-section">
          <h2>
            <span>Our </span>
            <span className="highlight">Impact</span>
          </h2>
          <p>
            Since 2019, FoodSaver has successfully redirected over 50,000 tons
            of food, impacting millions of lives. From disaster relief efforts
            to daily donations, our impact extends to every corner of society.
            We’ve partnered with over 500 organizations, creating a robust
            network of trust and reliability.
          </p>
          <p>
            Our efforts have not only reduced food waste but also contributed to
            environmental sustainability by saving resources like water and
            energy that would have been wasted on discarded food. Every action
            you take with FoodSaver contributes to a larger, more meaningful
            impact.
          </p>
        </div>
        <div className="image-section">
          <img src="food1.jpg" alt="Our Impact" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container">
        <div className="image-section">
          <img src="why-choose-us our.jpg" alt="Why Choose Us" />
        </div>
        <div className="text-section">
          <h2>
            <span>Why Choose </span>
            <span className="highlight">FoodSaver</span>
          </h2>
          <p>
            - User-Friendly: Our platform is designed to make food sharing
            and receiving as seamless as possible.
          </p>
          <p>
            - Community-Centric: We believe in the power of communities.
            Every individual contribution amplifies our shared success.
          </p>
          <p>
            - Eco-Friendly Solutions: By minimizing food waste, we help
            reduce the carbon footprint of discarded food, promoting
            environmental health.
          </p>
          <p>
            Join a growing network of individuals and organizations dedicated to
            making a difference. FoodSaver isn t just a service—it s a movement.
            revolution.
          </p>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="container">
        <div className="text-section">
          <h2>
            <span>Our </span>
            <span className="highlight">Services</span>
          </h2>
          <p>
            - Emergency Food Redistribution: Ensure timely delivery to those
            in dire need, especially during crises or disasters.
          </p>
          <p>
            - Sustainable Food Management: Partner with businesses and
            households to reduce food waste at its source.
          </p>
          <p>
            - Educational Outreach: Spread awareness about food waste and
            sustainable practices through workshops and community events.
          </p>
        </div>
        <div className="image-section">
          <img src="servies.jpg" alt="Our Services" />
        </div>
      </div>
    </div>
  );
};

export default Home;
