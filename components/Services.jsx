import React from "react";

const Services = () => {
  // Array of services
  const services = [
    {
      title: "Wedding Photography",
      description: "Creating timeless memories of your special day, one beautiful moment at a time."
    },
    {
      title: "Product Photography",
      description: "Expertly showcasing your products with stunning visuals that captivate and inspire."
    },
    {
      title: "Event Photography",
      description: "Capturing the spirit of your events with vibrant images that tell your unique story."
    },
    {
      title: "Landscape Photography",
      description: "Exploring the beauty of nature through breathtaking images that inspire and evoke wonder."
    },
  ];

  return (
    <div className=" relative z-10 text-center w-full bg-EerieBlack px-2 sm:px-3 lg:px-5 pt-56">
      <h1 id="services" className="text-7.0xl sm:text-8.5xl lg:text-12xl italic mb-14">
        My Expertise
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-5">
            <h2 className="text-5xl sm:text-6xl md:text-7xl text-start">
              {service.title.split(" ").map((line, idx) => (
                <span key={idx}>
                  {line} <br />
                </span>
              ))}
            </h2>
            <span className="w-[250px] sm:w-full lg:w-[376px] self-end justify-self-end text-base sm:text-xl md:text-1.5xl lg:text-2xl font-normal tracking-wider text-start">
              {service.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
