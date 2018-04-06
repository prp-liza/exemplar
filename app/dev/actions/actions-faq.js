

// Select rubric
export const selectRubric= (rubric) => {
	console.log("clicked", rubric.name);
	return {
		type: "RUBRIC_SELECTED", // reducer-rubric-active
		payload: rubric
	}
};