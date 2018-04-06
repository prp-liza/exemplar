
export default function (state=null, action) {
	switch(action.type) {
		case "RUBRIC_SELECTED":
			return action.payload;
			break;
	}
	return state;

}