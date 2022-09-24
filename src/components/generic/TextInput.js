import React from "react";

const TextInput = ({ placeholder, value, setValue }) => {
	return (
		<input
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			className="px-7 py-3 flex-1 outline-none bg-transparent border-2 rounded-lg font-normal text-midnight-blue text-xl border-gray-600 focus:border-primary"
		/>
	);
};

export default TextInput;
