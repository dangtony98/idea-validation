import React from "react";
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const FEATURES = ["Design", "Accessibility", "Something else"]

const Feature = ({ feature }) => {
	return (
		<div>
			<div className="p-4 bg-primary rounded-lg inline-block">
				<FontAwesomeIcon 
					icon={faCoffee} 
					className="text-white text-xl"
				/>
			</div>
			<h3 className="text-lg font-bold text-midnight-blue my-4">
				{feature}
			</h3>
			<p className="text-midnight-blue">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			</p>
		</div>
	);
}

const FeatureGrid = () => {
	return (
		<div className="grid gap-4 grid-cols-3">
			{FEATURES.map(f => {
				return (
					<Feature 
						key={`Feature=${f}`} 
						feature={f} 
					/>
				);
			})}
		</div>
	);
}

export default FeatureGrid;
