import React from "react";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const PLANS = [
	{
		name: "Starter",
		price: "Free",
		descriptor: "",
		description: "The essentials to provide your best work to clients",
		buttonTitle: "Get access",
		features: [
			"Basic invoicing",
			"Easy to use accounting",
			"Multi-accounts",
		]
	},
	{
		name: "Scale",
		price: "$12",
		descriptor: "USD / mo",
		description: "A plan that scales with your rapidly growing business",
		buttonTitle: "Get access",
		features: [
			"Advanced invoicing",
			"Easy to use accounting",
			"Multi-accounts",
			"Tax planning toolkit",
		]
	},
	{
		name: "Enterprise",
		price: "Custom",
		descriptor: "",
		description: "Dedicated support and infrastructure for your company",
		buttonTitle: "Contact sales",
		features: [
			"Advanced invoicing",
			"Easy to use accounting",
			"Multi-accounts",
			"Tax planning toolkit",
			"VAT",
			"Free bank transfers"
		]
	},
];

const Card = ({ plan, index, onClick }) => {
	const textPrimaryColor = index === 1 ? "text-white" : "text-primary"
	const textSecondaryColor = index === 1 ? "text-white" : "text-midnight-blue"
	return (
		<div className="mb-8 md:mb-0 px-4 flex-1 flex flex-col basis-full">
			<div className={`flex flex-col flex-1 p-8 ${index === 1 ? "bg-primary" : "bg-white border-2 border-primary"} rounded-lg`}>
				<p className={`text-2xl font-medium mb-4 ${textPrimaryColor}`}>
				{plan.name}
				</p>
				<p className="text-white py-4 mb-2">
					<span className={`text-4xl font-bold ${textPrimaryColor}`}>
						{`${plan.price} `}
					</span>
					<span className={`text-lg font-bold ${textSecondaryColor}`}> 
						{plan.descriptor}
					</span>
				</p>
				<p className={`text-lg font-medium py-4 ${textSecondaryColor}`}>{plan.description}</p>
				<div className="flex-1">
					{plan.features.map((f, fIndex) => {
						return (
							<div 
								className={`py-4 ${fIndex !== plan.features.length - 1 ? "border-b-2 border-gray-200" : ""}`}
								key={`Feature-${f}`}
							>
								<p className={`text-lg font-medium ${textSecondaryColor}`}>
									<FontAwesomeIcon 
										icon={faCheck}
										className={`text-lg mr-2 ${textPrimaryColor}`}
									/>
									{f}
								</p>
							</div>
						);
					})}
				</div>
					<div
						onClick={onClick}
						className={`text-center mt-4 px-7 py-3 rounded-lg border-2 ${index === 1 ? "bg-white text-primary border-white" : "bg-primary text-white border-primary"} text-xl font-medium cursor-pointer hover:opacity-50 duration-200`}
					>
						{plan.buttonTitle}
					</div>
			</div>
		</div>
	);
}

const Pricing = ({
	title,
	subtitle,
	onClick
}) => {
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
			<div className="m-auto max-w-6xl py-8 md:py-16 md:flex justify-around">
				{PLANS.map((p, index) => {
					return (
						<Card 
							plan={p}
							index={index}
							onClick={onClick}
							key={`Plan-${p.name}`}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Pricing;
