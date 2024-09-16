import bannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="h-[300px] sm:h-[400px] md:h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat mx-auto rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col px-4 lg:p-60 md:p-40 text-center space-y-4 sm:space-y-6 justify-center items-center text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="text-sm sm:text-md font-bold flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="bg-green-500 text-black py-3 px-4 rounded-full">
            Explore Now
          </button>
          <button className="py-3 px-4 rounded-full border border-white">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
