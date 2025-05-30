const express = require('express');
const router = express.Router();
const addData = require("../controller/DataController");

router.post('/', addData);


module.export = router;