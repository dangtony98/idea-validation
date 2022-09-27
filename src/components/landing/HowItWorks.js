import React from "react";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const STEPS = [
	{
		title: "Lorem ipsum dolor sit amet",
		subtitle: "Sed do eiusmod tempor incididunt ut"
	},
	{
		title: "Lorem ipsum dolor sit amet",
		subtitle: "Sed do eiusmod tempor incididunt ut"
	},
	{
		title: "Lorem ipsum dolor sit amet",
		subtitle: "Sed do eiusmod tempor incididunt ut"
	},
];

const Step = ({ step }) => {
	return (
		<div className="flex-1 py-4 px-4">
			<div className="w-full h-64 bg-midnight-blue rounded-lg"></div>
			<div className="mt-4">
				<p className="text-2xl text-gray-600 font-bold mb-2 text-center md:text-left">
					{step.title}
				</p>
				<p className="text-lg text-midnight-blue font-medium text-center md:text-left">
					{step.subtitle}
				</p>
			</div>
		</div>
	);
}

const HowItWorks = ({ title, subtitle }) => {
	return (
		<div>
			<div className="m-auto max-w-2xl">
				<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold mt-4 text-center">
					{title}
				</h2>
				<p className="text-center text-2xl font-medium my-8 text-gray-600">
					{subtitle}
				</p>
			</div>
			<div className="md:flex justify-around m-auto max-w-6xl py-8 md:py-16">
				{STEPS.map((s, index) => {
					return (
						<Step
							step={s}
							key={`Step-${index}`}
						/> 
					);
				})}
			</div>
		</div>
	);
};

export default HowItWorks;
