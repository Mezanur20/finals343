"use client";

export default function Home() {
 const showBookingMessage = () => {
 alert("Thanks! We'll get back to you soon.");
 };

 return (
 <div className="container mx-auto px-6 py-10 max-w-4xl bg-gradient-to-br from-green-50 via-green-100 to-green-50 rounded-lg shadow-lg">
 <h1 className="text-4xl font-extrabold mb-4 text-green-900 drop-shadow-md">
 Blessed Spaces Carpet Cleaners
 </h1>
 <p className="tagline text-lg italic mb-8 text-green-700">
 Making your carpets fresh, clean, and beautiful!
 </p>

 <nav className="mb-10 space-x-8 text-teal-700 font-semibold">
 <a href="#services" className="hover:text-teal-900 hover:underline transition">
 Services
 </a>
 <a href="#about" className="hover:text-teal-900 hover:underline transition">
 About
 </a>
 <a href="#contact" className="hover:text-teal-900 hover:underline transition">
 Contact
 </a>
 </nav>

 <section className="hero mb-14">
 <h2 className="text-3xl font-semibold mb-3 text-green-800">
 Professional Carpet Cleaning
 </h2>
 <p className="mb-5 text-green-700 max-w-prose">
 We remove stains, dirt, and odors from your carpets at affordable prices.
 </p>
 <button
 onClick={showBookingMessage}
 className="bg-teal-600 text-white rounded-lg px-6 py-3 hover:bg-teal-700 transition shadow-md"
 >
 Book Today!
 </button>
 </section>

 <section id="services" className="section mb-14">
 <h3 className="text-2xl font-semibold mb-4 text-green-800">Our Services</h3>
 <ul className="list-disc list-inside space-y-2 text-green-700">
 <li>Deep Carpet Cleaning</li>
 <li>Pet Stain Removal</li>
 <li>Office Carpet Cleaning</li>
 <li>Fast Drying Service</li>
 </ul>
 </section>

 <section id="about" className="section mb-14">
 <h3 className="text-2xl font-semibold mb-4 text-green-800">About Us</h3>
 <p className="text-green-700 max-w-prose">
 We are a small cleaning business with over 2 years of experience. We care about quality and happy customers!
 </p>
 </section>

 <section id="contact" className="section mb-14">
 <h3 className="text-2xl font-semibold mb-4 text-green-800">Contact Us</h3>
 <p className="text-green-700">Email: Blessedspace@gmail.com</p>
 <p className="text-green-700">Phone: (347) 123-4567</p>
 </section>

 <div id="notification" className="hidden">
 Thanks! We'll get back to you soon.
 </div>

 <footer className="border-t pt-6 text-center text-green-600 text-sm font-medium">
 <p>&copy; 2025 Blessed Spaces Carpet Cleaners</p>
 </footer>
 </div>
 );
}