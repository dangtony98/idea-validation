import React from "react";

const CTA = ({
	title,
	subtitle
}) => {
	return (
		<div>
			<div className="m-auto max-w-6xl bg-primary py-16 rounded-lg shadow-lg">
				<div className="m-auto text-center max-w-2xl">
					<h2 className="text-white text-4xl font-bold mt-4 text-center">
						{title}
					</h2>
					<p className="text-center text-2xl font-medium my-8 text-white">
						{subtitle}
					</p>
					<div
						className="inline-block ml-4 px-7 py-3 rounded-lg border-2 border-white text-xl bg-white text-primary font-medium cursor-pointer hover:opacity-50 duration-200"
					>
						Join the waitlist
					</div>
				</div>
			</div>
		</div>
	);
}
export default CTA;
