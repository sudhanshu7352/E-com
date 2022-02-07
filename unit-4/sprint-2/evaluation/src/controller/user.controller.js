const express =require("express");

const user = require("../model/user.model");

const crudController =require("./crud.controller");
const router =express.Router();

router.post("",crudController(user).post);

router.get("",crudController(user).get)
