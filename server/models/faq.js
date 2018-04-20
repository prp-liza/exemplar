const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create faq Schema & model
const FaqSchema = new Schema({
	name: {
		type: String,
		//required: [true,'Name field is required']
	},
	slug: {
		type: String
	},
	content : [{
    	question: {
			type: String,
			//required: [true,'Question field is required']
		},
    	answer: {
			type: String,
			//required: [true,'Answer field is required']
		}
    }]
});

const Faq = mongoose.model('faq', FaqSchema);
module.exports = Faq;
