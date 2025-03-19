import React from "react";

export default function GetInvolved() {
  return (
    <>
      <div className="w-auto bg-[#EDF4FF] rounded-xl py-24 m-24">
        <div className="flex flex-col lg:flex-row items-center justify-between w-[85%] mx-auto gap:10 md:gap-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-semibold text-navy-900 mb-6">
              GET INVOLVED
            </h1>
            <p className="text-lg md:text-[1.6rem] text-gray-700 leading-relaxed">
              At Evool Foundation, we believe that meaningful change happens
              when people come together. We invite individuals, organizations,
              and businesses who share our vision of using technology to address
              human and environmental challenges to join us in our mission.
            </p>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-[85%] mx-auto">
        {/* Card 1 - Business Growth */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center">
          <h2 className="text-xl font-semibold mb-4">Partner with us</h2>
          <p className="text-gray-600">
            Collaborate with us to develop new platforms that address critical
            social and environmental needs.
          </p>
        </div>

        {/* Card 2 - Job Opportunities */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center">
          <h2 className="text-xl font-semibold mb-4">
            Volunteer your time and expertise
          </h2>
          <p className="text-gray-600">
            If you're passionate about technology, sustainability or community
            development, we'd love to have your support.
          </p>
        </div>

        {/* Card 3 - Environmental Sustainability */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center">
          <h2 className="text-xl font-semibold mb-4">Become s supporter</h2>
          <p className="text-gray-600">
            Weather through financial contributions of spreading the world, your
            support helps us continue developing platforms that improve lives
            and care for the planet.
          </p>
        </div>
      </div>
    </>
  );
}
