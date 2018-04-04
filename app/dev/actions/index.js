

// Select faq
export const selectFaq = (faq) => {
	console.log("clicked", faq.category);
	return {
		type: "FAQ_SELECTED", // reducer-faq-active
		payload: faq
	}
};