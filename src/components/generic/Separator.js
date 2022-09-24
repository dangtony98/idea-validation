import React from "react";

const Separator = ({ 
	title,
	subtitle
}) => {
	return (
		<div className="flex flex-col w-full items-center justify-center my-8">
			<h1 className="text-white text-4xl font-bold text-black mt-4 text-center">
				{subtitle}
			</h1>
		</div>
	);
};

export default Separator;
