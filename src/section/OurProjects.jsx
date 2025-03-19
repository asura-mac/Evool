// import React from 'react';
// import OurProjectImage from "../assets/project.png";

// export default function OurProjects() {
// 	return (

// 		<div className='pb-36 max-sm:pb-20 w-[85%] mx-auto sm:pt-20' id='our-project'>
// 			<h1 className='text-4xl text-nowrap max-lg:text-center font-semibold  md:text-6xl pb-10'>OUR PROJECTS</h1>
// 			<div className='flex flex-col lg:flex-row gap-10 md:gap-20 items-center'>
// 				<img src={OurProjectImage} alt="" className='w-full sm:hidden md:w-[400px] rounded-lg pt-10' />
// 				<p className='text-lg xl:text-2xl w-full md:w-[60%] text-justify mb-8 md:mb-0'>
// 					Voolata is an innovative QR code generator web platform designed to create detailed medical cards for humans, as well as identity cards for plants and animals. This platform allows users to store and access vital health information for themselves and comprehensive details for their pets and plants, ensuring that all essential information is always at hand.
// 					With Voolata, you can create medical profiles that include vaccination records, medical history, and emergency contacts for humans. Additionally, it allows you to generate identity cards for plants and animals, documenting their species, care instructions, and other important details. This holistic approach not only ensures better care and management but also promotes environmental sustainability by reducing the need for paper records and encouraging eco-friendly practices.
// 				</p>
// 				<img src={OurProjectImage} alt="" className='w-full hidden sm:block md:w-[400px] rounded-lg' />
// 			</div>
// 		</div>
// 	)
// }

import React from "react";
import OurProjectImage from "../assets/project.png";

export default function OurProjects() {
	return (
		<div className="w-full py-20 bg-white" id="our-mission">
			<div className="max-w-7xl mx-auto">
				{/* Section with Title and Content */}
				<div className="w-[100%] flex flex-col lg:flex-row items-center gap-20px">
					{/* Left Column with Title and Text */}
					<div className="lg:w-3/5 ">
						<h3 className="text-4xl sm:text-5xl font-semibold text-navy-900 mb-8">
							OUR PROJECTS
						</h3>
						<p className="text-lg md:text-[1.6rem] text-gray-700 leading-relaxed">
						Voolata is an innovative QR code generator web platform designed to create detailed medical cards for humans, as well as identity cards for plants and animals. This platform allows users to store and access vital health information for themselves and comprehensive details for their pets and plants, ensuring that all essential information is always at hand.
						// 					With Voolata, you can create medical profiles that include vaccination records, medical history, and emergency contacts for humans. Additionally, it allows you to generate identity cards for plants and animals, documenting their species, care instructions, and other important details. This holistic approach not only ensures better care and management but also promotes environmental sustainability by reducing the need for paper records and encouraging eco-friendly practices.
						</p>
					</div>

					{/* Right Column with Image */}
					<div className="lg:w-2/5 flex items-center justify-center">
						<img
							src={OurProjectImage}
							alt="Our Mission"
							className="w-full max-w-[500px] object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
