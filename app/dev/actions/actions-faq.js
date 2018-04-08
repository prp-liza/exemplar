
// FETCH_RUBRICS
// ADD_RUBRIC
// SELECT_RUBRIC

// FETCH_FAQS
// ADD_FAQS
// SELECT_FAQ


export const selectRubric= rubric => {
	console.log("action:", rubric.name);
	return {
		type: "RUBRIC_SELECTED",
		payload: rubric
	}
};