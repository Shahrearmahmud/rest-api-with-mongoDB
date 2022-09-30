
const {v4: uuidv4}= require("uuid");
const User = require("../models/user.model");


//Return all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

//Return one user
const getOneUsers = async (req, res) => {
    try {
      const user = await User.findOne({ id: req.params.id });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };


// Create an user
const createUser = async (req, res) => {
    try {
      const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        age: Number(req.body.age),
      });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

// Update an user
const updateUser = async (req, res) => {
    try {
      const user = await User.findOne({ id: req.params.id });
      user.name = req.body.name;
      user.age = Number(req.body.age);
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

//delete an user
const deleteUser = async (req, res) => {
    try {
      await User.deleteOne({ id: req.params.id });
      res.status(200).json({ message: "user is deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };


module.exports = {getAllUsers,getOneUsers,createUser,updateUser,deleteUser};