import React from "react";
import BusinessGrowthImage from "../assets/about.png";
import JobOpportunitiesImage from "../assets/about.png";
import SustainabilityImage from "../assets/about.png";

export default function WhatWeDo() {
  return (
    <div className="w-full py-20 bg-white">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-center mb-16">
        What We Do
      </h1>

      {/* Cards Section */}
      {/* because of justify items the third card is appearing in the center line of all images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-[85%] mx-auto">
        {/* Card 1 - Business Growth */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center">
          <img
            src={BusinessGrowthImage}
            alt="Business Growth"
            className="w-full h-48 object-cover rounded-xl mb-6"
          />
          <h2 className="text-xl font-semibold mb-4">
            How A Website Growths your Business
          </h2>
          <p className="text-gray-600">
            We create intuitive platforms that address everyday challenges,
            making life easier and more efficient. Our solutions are designed to
            offer practical benefits and improve daily routines.
          </p>
        </div>

        {/* Card 2 - Job Opportunities */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center">
          <img
            src={JobOpportunitiesImage}
            alt="Job Opportunities"
            className="w-full h-48 object-cover rounded-xl mb-6"
          />
          <h2 className="text-xl font-semibold mb-4">
            Create Job Opportunities
          </h2>
          <p className="text-gray-600">
            A core objective is to generate employment through the platforms we
            develop. By providing tools that help individuals and businesses
            operate more efficiently, we open doors to financial independence
            and long-term growth.
          </p>
        </div>

        {/* Card 3 - Environmental Sustainability */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm text-center">
          <img
            src={SustainabilityImage}
            alt="Environmental Sustainability"
            className="w-full h-48 object-cover rounded-xl mb-6"
          />
          <h2 className="text-xl font-semibold mb-4">
            Promote Environmental Sustainability
          </h2>
          <p className="text-gray-600">
            We design eco-friendly solutions that encourage sustainable living
            practices, contributing to environmental conservation.
          </p>
        </div>
      </div>
    </div>
  );
}
