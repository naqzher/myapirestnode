// Para acceder a las variables de .env
require('dotenv').config();

const express 	= require('express'); //Para levantar el servidor
const morgan 	= require('morgan'); //Muestra las peticiones por consola

// Inicializaciones
	const app = express(); //Servidor
	require('./database'); //Instanciamos la conexion db

// Settings
	// Seteamos 'port' -> env.PORT o 3000
	app.set('port', process.env.PORT || 3000);

// Middlewares
	app.use(morgan('dev'));
	app.use(express.urlencoded({extended: false})); //metodo de express urlencoded middle -> cuando haya un form del front vamos a poder interpretar como si fuera un json
	app.use(express.json()); //tambien puede recibir json, ajax

// Routes
	app.use('/api/usuarios', require('./routes/usuarios'));

// Start Server
	// app.get('port') = app.set('port', 3000); LA VARIABLES ES PORT
	app.listen(app.get('port'), () =>{
		console.log('Server on port', app.get('port'));
	})