export default function (state=null, action) {
	switch(action.type) {
		case "FAQ_SELECTED":
			return action.payload;
			break;
	}
	return state;

}