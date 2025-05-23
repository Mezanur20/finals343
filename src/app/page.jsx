'use client'

export default function Page() {
  function showBookingMessage() {
    const note = document.getElementById("notification");
    note.classList.remove("hidden");
    setTimeout(() => {
      note.classList.add("hidden");
    }, 3000);
  }

  return (
    <div className="bg-white max-w-[800px] mx-auto my-5 p-5 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Blessed Spaces Carpet Cleaners
      </h1>
      <p className="text-center text-gray-600 mb-5">
        Making your carpets fresh, clean, and beautiful!
      </p>

      <nav className="text-center mb-5">
        <a className="mx-2 text-red-500 font-bold hover:underline" href="#services">Services</a>
        <a className="mx-2 text-red-500 font-bold hover:underline" href="#about">About</a>
        <a className="mx-2 text-red-500 font-bold hover:underline" href="#contact">Contact</a>
      </nav>

      <section className="text-center bg-red-100 p-8 rounded-xl mb-5">
        <h2 className="text-2xl text-gray-800 font-semibold">Professional Carpet Cleaning</h2>
        <p className="mt-2">We remove stains, dirt, and odors from your carpets at affordable prices.</p>
        <button
          onClick={showBookingMessage}
          className="bg-red-400 text-white py-2 px-4 mt-4 rounded hover:bg-red-300 text-lg"
        >
          Book Today!
        </button>
      </section>

      <section id="services" className="p-5 mt-5 bg-red-50 rounded-xl">
        <h3 className="text-xl text-gray-800 text-center font-semibold">Our Services</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Deep Carpet Cleaning</li>
          <li>Pet Stain Removal</li>
          <li>Office Carpet Cleaning</li>
          <li>Fast Drying Service</li>
        </ul>
      </section>

      <section id="about" className="p-5 mt-5 bg-red-50 rounded-xl">
        <h3 className="text-xl text-gray-800 text-center font-semibold">About Us</h3>
        <p className="mt-2">We are a small cleaning business with over 2 years of experience. We care about quality and happy customers!</p>
      </section>

      <section id="contact" className="p-5 mt-5 bg-red-50 rounded-xl">
        <h3 className="text-xl text-gray-800 text-center font-semibold">Contact Us</h3>
        <p className="mt-2">Email: <a href="mailto:Blessedspace@gmail.com" className="text-blue-600 underline">Blessedspace@gmail.com</a></p>
        <p>Phone: <a href="tel:+13471234567" className="text-blue-600 underline">(347) 123-4567</a></p>
      </section>

      <div id="notification" className="text-center mt-5 p-2 bg-green-600 text-white rounded hidden">
        Thanks! We'll get back to you soon.
      </div>

      <footer className="text-center mt-8 p-3 bg-red-400 text-white rounded">
        <p>&copy; 2025 Blessed Spaces Carpet Cleaners</p>
      </footer>
    </div>
  );
}
