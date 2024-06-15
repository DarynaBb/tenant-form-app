import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex h-screen">
      <div className="basis-1/2 flex flex-col justify-center items-end text-center sm:text-right text-[1.5em] md:text-[1.8em] gap-5 p-[1em] sm:p-[2em]">
        <p className="text-gray-700">
          Simply <strong>enter</strong> your details, <strong>review</strong>{" "}
          your information, and <strong>complete</strong> your booking — all
          seamlessly integrated for your convenience.
        </p>
        <div>
          <p className="text-gray-700 mb-[15px]">
            <strong>Ready to find your perfect apartment?</strong>
          </p>
          <Link className="text-primary hover:underline" to="/form">
            Click here to begin!
          </Link>
        </div>
      </div>
      <div className="bg-primary basis-1/2 flex items-center">
        <h1 className="uppercase text-slate-50 opens-sans font-bold text-[1.8em] md:text[2.4em] lg:text-[3em] sm:p-[2em] p-[2em]">
          Welcome to Buena's Apartment Booking Service
        </h1>
      </div>
    </section>
  );
}

export default Home;
