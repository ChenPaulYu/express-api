import express from 'express'
import config  from '../config' 
import middleware from '../middleware'
import initializeDB from '../db'
import restaurant from '../controller/restaurant'

let router = express()


initializeDB( db => {

	router.use(middleware({config,db}))
	router.use('/restaurant', restaurant({config,db}))

})

export default router

