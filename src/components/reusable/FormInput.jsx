import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="mb-6">
			<label
				className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-4 py-3 border border-ternary-light dark:border-ternary-dark text-text-primary-light dark:text-text-primary-dark bg-primary-light dark:bg-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
