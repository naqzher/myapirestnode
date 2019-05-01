// Como definir una tabla
const {Schema, model} = require('mongoose'); 

const UserSchema = new Schema({
	username: { type: String, required: true},
	password: { type: String, required: true},
	email: { type: String, required: true},
	activo: { type: Boolean, default: 0}
});

module.exports = model('User', UserSchema);