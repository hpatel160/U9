const express = require('express');
const controller = require('../controller/individualController');
const router = express.Router();

router.get('/', controller.appointment_index);
router.get('/update/:id', controller.appointment_update);
router.post('/search/', controller.appointment_search_get);
router.post('/searchbyphone/', controller.appointment_searchbyphone_get);
router.post('/update/:id', controller.appointment_update_post);

module.exports = router;