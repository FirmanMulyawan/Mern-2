const express = require('express');
const {body} = require('express-validator')

const router = express.Router();
const dataController = require('../controllers/data');

//create -> POST
router.post('/data',
    [
    // body('tanggal').isISO8601().withMessage('input tanggal tidak sesuai'),
    body('usia').isNumeric().withMessage('input usia tidak sesuai'),
    ],
    dataController.createData)

router.get('/datas', dataController.getAllData);
module.exports = router;
router.get('/data/:dataId', dataController.getDataById);
router.put('/data/:dataId',
    [
    // body('tanggal').isISO8601().withMessage('input tanggal tidak sesuai'),
    body('usia').isNumeric().withMessage('input usia tidak sesuai'),
    ],
    dataController.updateData);

router.delete('/data/:dataId', dataController.deleteData);