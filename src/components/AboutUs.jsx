import banner from "../assets/banner.png";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-24">
      <figure className="border border-teal-600 rounded-full">
        <img src={banner} className="rounded-full" alt="" />
      </figure>
      <div>
        <h4 className="font-medium text-xl">WHO WE ARE</h4>
        <h2 className="text-4xl lg:text-5xl font-bold text-teal-500 mt-4">
          We Are the Bridge to Your Ridge Trek Dreams.
        </h2>
        <p className="text-gray-600 mt-8">
          Embark on unforgettable adventures with us as your trusted guide. From
          thrilling treks to serene nature explorations, we connect you to the
          peaks and paths you’ve always dreamed of conquering. Let us turn your
          trekking aspirations into reality!
        </p>
        <div className="divider"></div>
        <div className="md:flex items-center justify-between py-3 lg:py-6 space-y-2">
          <div className="text-center">
            <h2 className="text-purple-600 text-2xl lg:text-3xl font-bold">
              19K+
            </h2>
            <h5 className="text-gray-700 font-medium">MEMBER ACTIVE</h5>
          </div>
          <div className="text-center">
            <h2 className="text-purple-600 text-2xl lg:text-3xl font-bold">
              129
            </h2>
            <h5 className="text-gray-700 font-medium">EXPERT TEAM</h5>
          </div>
          <div className="text-center">
            <h2 className="text-purple-600 text-2xl lg:text-3xl font-bold">
              4.9
            </h2>
            <h5 className="text-gray-700 font-medium">CLIENT RATINGS</h5>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default AboutUs;
