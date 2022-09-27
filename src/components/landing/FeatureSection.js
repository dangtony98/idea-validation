import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const FeatureSection = ({
	title,
	subtitle,
	quote,
	name,
	side
}) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div data-aos={side === "right" ? "fade-right" : "fade-left"} className={`flex ${side === "right" ? "flex-row-reverse" : "flex-row"} max-w-6xl m-auto py-8 md:py-16`}>
			<div className={`md:flex-1 px-8 py-4 border-primary ${side === "right" ? "border-r-2" : "border-l-2"}`}>
				<div className="border-b-2 border-primary">
					<h2 className="text-midnight-blue text-3xl md:text-4xl font-bold mt-4">
						{title}
					</h2>
					<p className="text-2xl font-medium my-8 text-gray-600">
						{subtitle}
					</p>
				</div>
				<div className="mt-8">
					<p className="text-lg text-gray-600">
						{`"${quote}"`}
					</p>
					<div className="flex items-center mt-2">
						<div className="h-8 w-8 bg-midnight-blue mr-4 rounded-full"></div>
						<p className="text-lg text-midnight-blue">{name}</p>
					</div>
				</div>
			</div>
			<div className="md:flex-1 bg-midnight-blue rounded-lg">

			</div>
		</div>
	);
}

export default FeatureSection;
