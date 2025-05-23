export default function Page() {
  function showBookingMessage() {
    const note = document.getElementById("notification");
    note.classList.remove("hidden");
    setTimeout(() => {
      note.classList.add("hidden");
    }, 3000);
  }

  return (
    <div className="container">
      <h1>Blessed Spaces Carpet Cleaners</h1>
      <p className="tagline">Making your carpets fresh, clean, and beautiful!</p>

      <nav>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <h2>Professional Carpet Cleaning</h2>
        <p>We remove stains, dirt, and odors from your carpets at affordable prices.</p>
        <button onClick={showBookingMessage}>Book Today!</button>
      </section>

      <section id="services" className="section">
        <h3>Our Services</h3>
        <ul>
          <li>Deep Carpet Cleaning</li>
          <li>Pet Stain Removal</li>
          <li>Office Carpet Cleaning</li>
          <li>Fast Drying Service</li>
        </ul>
      </section>

      <section id="about" className="section">
        <h3>About Us</h3>
        <p>We are a small cleaning business with over 2 years of experience. We care about quality and happy customers!</p>
      </section>

      <section id="contact" className="section">
        <h3>Contact Us</h3>
        <p>
          Email: <a href="mailto:Blessedspace@gmail.com">Blessedspace@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+13471234567">(347) 123-4567</a>
        </p>
      </section>

      <div id="notification" className="hidden">
        Thanks! We'll get back to you soon.
      </div>

      <footer>
      <p>&copy; 2024 Your Company</p>
      </footer>
