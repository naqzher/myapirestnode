const mongoose = require('mongoose'); 

mongoose.connect(process.env.MONGODB_URI,{ //recibe parametro - cadena de conexion, la db se crea sola cuando guardemos datos
	useNewUrlParser: true, //CFG Para que mongoose no nos muestre error por pantalla

})
	.then(db => console.log('Db is connect')) // Si todo cool, obtengo un obj 'db'
	.catch(err => console.log(err));
