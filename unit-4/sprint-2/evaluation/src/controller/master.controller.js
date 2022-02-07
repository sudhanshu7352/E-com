const express =require("express");

const master = require("../model/masteraccount.model");

const crudController =require("./crud.controller");
const router =express.Router();

router.post("",crudController(master).post);

router.get("",crudController(master).get)