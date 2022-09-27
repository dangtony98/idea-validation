import React, { useState } from "react";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const QUESTIONS = [
	{
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
];

const Question = ({ question }) => {
	const [isOpen, setIsOpen] = useState(false);
	
	const handleOpen = () => {
		setIsOpen(!isOpen);
	}
	
	return (
		<div className="px-2 py-4 border-b-2">
			<div 
				onClick={handleOpen}
				className="flex items-top"
			>
				<FontAwesomeIcon 
					icon={isOpen ? faMinus : faPlus} 
					className="text-primary text-xl mt-2"
				/>
				<h2 className="text-midnight-blue text-2xl font-bold ml-2">
					{question.question}
				</h2>
			</div>
			{isOpen && (
				<p className="text-gray-600 text-lg mt-2">
					{question.answer}
				</p>
			)}
		</div>
	);
}

const FAQ = () => {
	return (
		<div className="m-auto max-w-2xl">
			<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold text-center mb-8">
				Frequently asked questions,
				<span className="text-transparent text-primary underline-offset-2">
					{` answered`}
				</span>
			</h2>
			{QUESTIONS.map((q, index) => {
				return (
					<Question 
						question={q}
						key={`Question-${q}`}
					/>
				);
			})}
		</div>
	);
}

export default FAQ;
