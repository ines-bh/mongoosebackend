// require express
const express = require("express");

//require router
const router = express.Router();

// require model
const Contact = require("../model/Contact");
// require controllers
const controllers = require("../controller/contact.controller");

/**
 * @desc : add new contact
 * @method:post
 * @path:'http://localhost:6000/api/contacts/'
 * @data:req.body
 */

router.post("/", controllers.addContact);

/**
 * @desc : get all contact
 * @method:get
 * @path:'http://localhost:6000/api/contacts/'
 * @data: no data
 */
router.get("/", controllers.getContact);

// /**
//  * @desc : delete one contact
//  * @method:delete
//  * @path:'http://localhost:6000/api/contacts/:id'
//  * @data: req.params
//  */
router.delete("/:id", controllers.deleteContact);

// /**
//  * @desc : get one contact
//  * @method:get
//  * @path:'http://localhost:6000/api/contacts/:_id'
//  * @data: req.params
//  */
router.get("/:_id", controllers.getOneContact);

// /**
//  * @desc : update one contact
//  * @method:put
//  * @path:'http://localhost:6000/api/contacts/:_id'
//  * @data: req.params & req.body
//  */

router.put("/:_id", controllers.updateContact);

module.exports = router;
