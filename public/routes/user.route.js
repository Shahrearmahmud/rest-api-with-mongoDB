const express =require('express');
const { getAllUsers, createUser, getOneUsers, deleteUser, updateUser } = require('../controllers/user.controller');
const router =express.Router();


router.get("/",getAllUsers);
router.post("/",createUser);
router.get("/:id",getOneUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);


module.exports = router;
