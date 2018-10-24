const mongoose = require('mongoose');
//Modelo para los estudiantes
var studentSchema = mongoose.Schema({
	name: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	upyid: {
		type: String
	},
  carrer: {
    type: String
  }
});
 const students = mongoose.model('students', studentSchema);
//Modelo de las respuestas
var answerSchema = mongoose.Schema({
	question1: {
		type: String,
		index:true
  },
	question2: {
		type: String
	},
	question3: {
		type: String
	},
  answer3: {
    type: String
  }
});
  const answers = mongoose.model('answers', answerSchema);
//Aun en desarrollo
