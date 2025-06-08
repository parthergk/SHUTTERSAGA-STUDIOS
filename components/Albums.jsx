'use client';
import Image from "next/image";
const Albums = () => {

  const imagesColumn1 = [
    { src: "/image/c.jpg", height: 233.45, width: 350 },
    { src: "/image/d.jpg", height: 449.95, width: 300 },
    { src: "/image/n.jpg", height: 233.45, width: 350.31 },
    { src: "/image/a.jpg", height: 449.95, width: 300 },
  ];

  const imagesColumn2 = [
    { src: "/image/a.jpg", height: 449.95, width: 300 },
    { src: "/image/n.jpg", height: 233.45, width: 350.31 },
    { src: "/image/d.jpg", height: 449.95, width: 300 },
    { src: "/image/c.jpg", height: 233.45, width: 350 },
  ];

  return (
    <div
      id="album"
      className="relative z-10 w-full bg-EerieBlack px-2 sm:px-3 lg:px-5"
    >
      <h1 className="relative text-7.0xl sm:text-8.5xl lg:text-12xl italic mb-14 text-center">
        Albums
      </h1>

      <div className="md:flex gap-10">
        {/* Left Column: Sticky Image */}
        <div className="z-0 sticky top-0 w-full md:w-1/2">
          <div className="sticky flex justify-center md:justify-start top-0 py-20 md:py-0">
            <Image
              alt="Albums"
              src="/image/f.jpg"
              height={749.91}
              width={500}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Scrollable Images */}
        <div className="relative z-10 w-full md:w-1/2 flex gap-5 overflow-y-auto">
          <div className="flex flex-col gap-5">
            {imagesColumn1.map((image, index) => (
              <Image
                key={index}
                alt="Albums"
                src={image.src}
                height={image.height}
                width={image.width}
                className="object-cover"
              />
            ))}
          </div>

          <div className="flex flex-col gap-5">
            {imagesColumn2.map((image, index) => (
              <Image
                key={index}
                alt="Albums"
                src={image.src}
                height={image.height}
                width={image.width}
                className="object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
