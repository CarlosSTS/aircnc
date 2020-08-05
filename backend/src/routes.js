const express= require('express')
const multer = require('multer');
const uploadConfig=require('./config/upload'); 

const routes = express.Router();
const upload = multer(uploadConfig);


const SessionController= require('./controllers/SessionController')
const SpostController = require('./controllers/SpostController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

routes.post('/users', SessionController.create)//criar usuário
routes.post('/spots',upload.single('thumbnail') ,SpostController.create)// criar spots
routes.get('/spots',SpostController.index)// criar listar por techs

routes.get('/dashboard',DashboardController.show)

routes.post('/booking/:booking_spot', BookingController.create)// criar booking

module.exports=routes