const express =require("express");

const saving = require("../model/savingsaccount.model");

const crudController =require("./crud.controller");
const router =express.Router();

router.post("",crudController(saving).post);

router.get("",crudController(saving).get)