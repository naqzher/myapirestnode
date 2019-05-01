const {Router} 	= require('express');
const router = Router();

const Usuario = require('../models/Usuario');

router.get('/', async (req, res) =>{
	const usuarios = await Usuario.find();
	res.json(usuarios);
});


router.post('/addUser', async (req, res) => {
	const {username, password, email, activo} = req.body;
	try {
		const newUser = new Usuario({username, password, email, activo});
		await newUser.save();
		res.json({
			message: "success",
			status_code: 0
		});
	}
	catch(error) {
		res.json({
			message: error.message,
		});
	}

})

router.post('/activateUser', async (req, res) => {
	try {		
		const user = await Usuario.findById(req.body.id);
		user.activo = true;
		await user.save();
		res.json({
			// user: user,
			message: "success",
			status_code: 0
		});
	}
	catch(error) { 
		res.json({
			message: error.message,
		});
	}
});

router.post('/deactivateUser', async (req, res) => {
	try {		
		const user = await Usuario.findById(req.body.id);
		user.activo = false;
		await user.save();
		res.json({
			// user: user,
			message: "success",
			status_code: 0
		});
	}
	catch(error) { 
		res.json({
			message: error.message,
		});
	}
});

router.get('/getUser/:id', async (req, res) => {
	try {		
		const user = await Usuario.findById(req.params.id);
		res.json(user);
	}
	catch(error) { 
		res.json({
			message: error.message,
		});
	}
});








module.exports = router;