export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between bg-slate-950 px-6 py-5 text-white">
        <h1 className="text-2xl font-bold tracking-wide">
          CHINGU TRAVEL
        </h1>
        <nav className="hidden gap-6 md:flex">
          <a href="#home">Home</a>
          <a href="#tours">Tours</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section
        id="home"
        className="flex min-h-[600px] flex-col items-center justify-center bg-slate-800 px-6 text-center text-white"
      >
        <p className="mb-4 tracking-[0.3em] text-amber-300">
          EXPLORE • DISCOVER • EXPERIENCE
        </p>
        <h2 className="max-w-4xl text-5xl font-bold md:text-7xl">
          Your Journey Begins With Chingu
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Discover amazing destinations, unforgettable adventures,
          and carefully selected travel experiences.
        </p>
        <a
          href="#tours"
          className="mt-8 rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-950"
        >
          EXPLORE OUR TOURS
        </a>
      </section>

      <section id="tours" className="px-6 py-20 text-center">
        <p className="font-semibold tracking-widest text-amber-600">
          TRAVEL WITH US
        </p>
        <h2 className="mt-3 text-4xl font-bold">Featured Tour Packages</h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Find your next adventure with our travel packages.
        </p>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-gray-100 p-10">
          <h3 className="text-xl font-bold">Exciting destinations await!</h3>
          <p className="mt-3 text-gray-600">
            Our tour packages will be published here soon.
          </p>
        </div>
      </section>

      <section id="gallery" className="bg-gray-100 px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Travel Gallery</h2>
        <p className="mt-4 text-gray-600">
          Memories and destinations from our journeys.
        </p>
      </section>

      <section id="about" className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">About Chingu Travel and Tours</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          We help travelers discover destinations and enjoy meaningful
          travel experiences through carefully planned tour packages.
        </p>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">Let's Plan Your Next Journey</h2>
        <p className="mt-4 text-gray-300">
          Contact our team for tour inquiries and bookings.
        </p>
        <a
          href="mailto:chingutravelandtours@gmail.com"
          className="mt-7 inline-block rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-950"
        >
          CONTACT US
        </a>
      </section>

      <footer className="bg-black px-6 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CHINGU Travel and Tours. All rights reserved.
      </footer>
    </main>
  );
}
