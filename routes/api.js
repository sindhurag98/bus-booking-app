const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const Buses = require('../models/bus')
const mongoose = require('mongoose')
const db = "mongodb://localhost/admin"


mongoose.connect(db ,err => {
  if(err){
    Console.log('Error!!'+ err)
  }
  else{
    console.log('connecteddddd to mongo')
  }
})


router.get('/',(req,res) => {
  res.send('from api route')
})

router.post('/register',(req,res) =>{
let userData = req.body
let user = new User(userData)
user.save((error, registeredUser) => {
  if(error){
    console.log(error)
  } else{
    res.status(200).send(registeredUser)
  }
})
})


router.post('/login', (req,res) => {
  let userData = req.body

  User.findOne({ email: userData.email}, (error,user) =>{
    if (error){
      console.log(error)
    }else{
      if(!user){
        res.status(401).send('invalid username')
      }else
      if( user.password !== userData.password){
        res.status(401).send('invalid password')
      }else{
        res.status(200).send(user)
      }
    }
  })
})


router.post('/bus',(req,res)=>{
  console.log(req.body.from)
  console.log(req.body.to)
  console.log(req.body.traveldate)
  Buses.find({from: req.body.from, to: req.body.to},(err,data)=>{
    if(!err){
      res.json(data);
      console.log(data);
    }
    else {
      console.log(err)
    }
  })
})

router.get('/buses',(req,res) => {
  console.log('buses');
  Buses.find({},(err,data)=>{
    if(!err){
      res.json(data);
      console.log(data);
    }
  })
})



module.exports = router
