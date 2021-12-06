export interface FormErrorMessages {
	min: string;
	max: string;
	required: string;
	email: string;
	minLength: string;
	maxLength: string;
	pattern: string;
	matchPassword: string;
	date: string;
}

export type CustomErrorMessages = Record<keyof FormErrorMessages, () => string>;

// I'd rather specify the types and create the above interface from those, but ts won't do that.
export type ErrorTypes = keyof FormErrorMessages | 'message';
