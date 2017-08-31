import mongoose from 'mongoose'
import {Router} from 'express'
import Restaurant from '../model/restaurant'


export default({config,db}) => {
	let api = Router()

	// "/v1/restaurant/add" - Create a data to db

	api.post('/add',(req,res) => {
		let newRest = new Restaurant()
		newRest.name = req.body.name;
		newRest.save(err => {
			if(err){
				res.send(err)
			}
			res.json( {message : 'Restaurant saved successfully'} )
		})
	})


	// "/v1/restaurant" - Get All data from db
	api.get('/',(req,res) => {
		Restaurant.find({},(err,restaurants) => {
			if(err){
				res.send(err)
			}
			res.json(restaurants)
		})
	})

	// "/v1/restaurant/:id" - Get id data from db

	api.get('/:id',(req,res) => {
		Restaurant.findById(req.params.id,(err,restaurant) => {
			if(err){
				res.send(err)
			}
			res.json(restaurant)
		})

	})

	// "/v1/restaurant/:id" - Update id data from db (need post body)

	api.put('/:id',(req,res) => {

		Restaurant.findById(req.params.id,(err,restaurant) => {

			if(err){
				res.send(err)
			}
			restaurant.name = req.body.name
			restaurant.save(err => {
				if(err){
					res.send(err)
				}
				res.json({message : "Restaurant info updatad"})
			})
		})

	})


	// "/v1/restaurant/:id" - Delete id data from db (need post body)

	api.delete('/:id',(req,res) => {

		Restaurant.remove({
			_id : req.params.id
		},(err,restaurant) => {
			if(err){
				res.send(err)
			}
			res.json({message : "Restaurant successfully removed"})
		})
	})





	return api
}




