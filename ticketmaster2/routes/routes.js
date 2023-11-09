const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get('/create', controller.appointment_create_get); 
router.get('/', controller.appointment_index);
router.post('/', controller.appointment_create_post);
router.get('/:id', controller.appointment_details);
router.delete('/:id', controller.appointment_delete);

module.exports = router;