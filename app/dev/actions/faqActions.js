

// Select faq
export const selectFaq = (faq) => {
	console.log("clicked", faq.category);
	return {
		type: "FAQ_SELECTED", // reducer-faq-active
		payload: faq
	}
};


// create faq
export const newFaq = (faqData) => {
	console.log("create", faqData);
	return {
		type: "NEW_FAQ", // reducer-faq-active
		payload: faq
	}
};