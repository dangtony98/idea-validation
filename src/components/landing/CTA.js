import React from "react";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const CTA = ({
	title,
	subtitle,
	onCTAClick
}) => {
	return (
		<div>
			<div className="m-auto max-w-6xl bg-primary py-8 md:py-16 px-4 rounded-lg shadow-lg">
				<div className="m-auto text-center max-w-2xl">
					<h2 className="text-white text-3xl md:text-4xl font-bold mt-4 text-center">
						{title}
					</h2>
					<p className="text-center text-2xl font-medium my-8 text-white">
						{subtitle}
					</p>
					<div
						onClick={onCTAClick}
						className="w-full md:w-auto inline-block px-7 py-3 rounded-lg border-2 border-white text-xl bg-white text-primary font-medium cursor-pointer hover:opacity-50 duration-200"
					>
						Get access
					</div>
				</div>
			</div>
		</div>
	);
}
export default CTA;
