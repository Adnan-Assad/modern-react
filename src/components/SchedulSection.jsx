import { IoIosArrowRoundForward } from "react-icons/io";
import schedulImage from "../assets/stats.webp";

const SchedulSection = () => {
  return (
    <section className="max-w-7xl bg-gray-100 mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* left */}
        <div className="md:w-1/2 w-full">
          <img src={schedulImage} alt="" className="w-full h-auto" />
        </div>
        {/* right */}

        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold">SCHEDUL</p>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mt-4 mb-6">
            Streamline your Business? <br />
            Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Take control of your tie and boost productivity with our intelligent
            scheaduling system. Automate appointments, manage team availability,
            and deliver exceptional customer experiences throught seamless
            calendar managements.
            <a
              href="#"
              className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Explore schedaling features{" "}
              <IoIosArrowRoundForward className="size-8" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SchedulSection;
