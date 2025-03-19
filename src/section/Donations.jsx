import React from "react";

export default function Donations() {
  return (
    <>
      <div className="w-auto bg-[#EDF4FF] rounded-xl py-20 m-24">
        <h1 className="text-4xl sm:text-6xl font-semibold text-navy-900 mb-6 text-center">
          HOW YOUR DONATIONS MAKE A DIFFERENCE
        </h1>

        {/* cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-[85%] mx-auto m-24">
          {/* Card 1 - Empowering Communities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[400px]">
            <div
              className="w-full h-28 bg-cover bg-center rounded-t-2xl border"
              style={{
                backgroundImage: "url('/img/1_5oV6570O4NMY5lAK4PRXnA@2x.png')",
              }}
            ></div>
            <h2 className="text-xl font-semibold mb-4">
              Empowering Communities
            </h2>
            <p className="text-gray-600 flex-grow">
              By supporting our projects, you help us create user-friendly
              platforms that make life easier and more efficient for individuals
              and businesses.
            </p>
          </div>

          {/* Card 2 - Creating Job Opportunities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[400px]">
            <div
              className="w-full h-28 bg-cover bg-center rounded-t-2xl border"
              style={{
                backgroundImage: "url('/img/1_5oV6570O4NMY5lAK4PRXnA@2x.png')",
              }}
            ></div>
            <h2 className="text-xl font-semibold mb-4">
              Creating Job Opportunities
            </h2>
            <p className="text-gray-600 flex-grow">
              Your donations enable us to generate employment through the
              platforms we develop, fostering financial independence and
              long-term growth.
            </p>
          </div>

          {/* Card 3 - Promoting Sustainability */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center flex flex-col justify-between h-[400px]">
            <div
              className="w-full h-28 bg-cover bg-center rounded-t-2xl border"
              style={{
                backgroundImage: "url('/img/1_5oV6570O4NMY5lAK4PRXnA@2x.png')",
              }}
            ></div>
            <h2 className="text-xl font-semibold mb-4">
              Promoting Sustainability
            </h2>
            <p className="text-gray-600 flex-grow">
              We design eco-friendly solutions that encourage sustainable living
              practices. Our initiatives help conserve natural resources, reduce
              waste, and contribute to a healthier environment overall. By
              promoting digital solutions, we aim to create a more sustainable
              future for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="text-center mt-16 px-6">
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
          Together, we can create a future where technology drives sustainable
          development and enhances the quality of life for all. Join us in our
          mission to make a positive impact on the world.
        </p>
        <h2 className="text-2xl font-bold mt-4">
          Donate Now and be a part of the{" "}
          <span className="text-blue-600">CHANGE!</span>
        </h2>
        <button className="mt-6 bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
          Donate
        </button>
      </div>
    </>
  );
}
