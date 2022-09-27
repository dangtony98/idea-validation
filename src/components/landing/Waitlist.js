import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import TextInput from "../generic/TextInput";
import SubmitInput from "../generic/SubmitInput";

const Form = ({ status, onSubmitted }) =>  {
	const [email, setEmail] = useState("");

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	
		// validate email then subscribe it to Mailchimp
		if (!validateEmail(email)) return;
		setEmail("");
		
		return onSubmitted({ EMAIL: email });
	}
	
	return (
		<form
			onSubmit={handleSubmit}
			className="my-16 md:px-20"
		>
			{status !== "success" ? (
				<div className="m-auto flex flex-col md:flex-row">
					<TextInput 
						placeholder="Enter your email"
						value={email}
						setValue={setEmail}
					/>
					<div className="mt-2 md:mt-0 md:ml-2">
						<SubmitInput 
							value={status === "sending" ? "Requesting..." : `Get access`}
						/>
					</div>
				</div>
			) : (
				<div className="m-auto">
					<SubmitInput 
						value="Requested. You'll hear back shortly ⚡️"
					/>
				</div>
			)}
		</form>
	);
}

const Waitlist = () => {
	return (
			<MailchimpSubscribe
				url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
				render={({ subscribe, status, message }) => {
					return (
						<Form 
							status={status}
							onSubmitted={formData => subscribe(formData)}
						/>
					);
				}}
			/>
	);
}

export default Waitlist;
