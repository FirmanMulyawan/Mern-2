const {validationResult} = require('express-validator')
const DataCovid = require('../models/data');

exports.createData = (req, res, next) => {
    const tanggal = req.body.tanggal;
    const status = req.body.status;
    const usia = req.body.usia;
    const noPasien_id = req.body.noPasien_id;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const Posting = new DataCovid({
        noPasien_id: noPasien_id,
        tanggal: tanggal,
        status: status,
        usia: usia,
        author: {
            uid: 1,
            name: "Testing",
        }
    });

    Posting.save()
        .then(result => {
            res.status(201).json({
                message: 'Create Data',
                data: result
            }); 
        })
        .catch(err => {
            console.log('err: ', err)
        });
}

exports.getAllData = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 10;
    let totalItems;

    DataCovid.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return DataCovid.find()
            .skip((parseInt(currentPage) - 1) * parseInt(perPage))
            .limit(parseInt(perPage));
        })
        .then(result => {
            res.status(200).json({
                message: "Data Berhasil dipanggil",
                data: result,
                total_data: totalItems,
                per_page: parseInt(perPage),
                current_page: parseInt(currentPage), 
            })
        })
        .catch(err => {
            next(err);
        })
}

exports.getDataById = (req, res, next) => {
    const getId = req.params.dataId;
    DataCovid.findById(getId)
        .then(result => {
            if (!result) {
                const error = new Error('Data tidak titemukan');
                error.errorStatus = 404;
                throw error;
            }
            res.status(200).json({
                message: 'Data Berhasil Dipanggil',
                data: result,
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.updateData = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }
    
    const tanggal = req.body.tanggal;
    const status = req.body.status;
    const usia = req.body.usia;
    const noPasien_id = req.body.noPasien_id;
    const dataId = req.params.dataId;

    DataCovid.findById(dataId)
        .then(data => {
            if (!data) {
                const err = new Error('Data tidak ditemukan');
                err.errorStatus = 404;
                throw err;
            }
            data.tanggal = tanggal;
            data.status = status;
            data.usia = usia;
            data.noPasien_id = noPasien_id;

            return data.save();
        })
        .then(result => {
            res.status(200).json({
                message: 'Upload Data',
                data: result,
            })
        })
        .catch(err => {
            next(err);
    })
    
}

exports.deleteData = (req, res, next) => {
    const dataId = req.params.dataId;

    DataCovid.findById(dataId)
        .then(data => {
            if (!data) {
            const err = new Error('Data tidak ditemukan');
            err.errorStatus = 400;
            throw err;
            }
            
            return DataCovid.findByIdAndDelete(dataId);
        })
        .then(result => {
            res.status(200).json({
                message: "Hapus data berhasil",
                data: result,
            })
        })
        .catch(err => {
            next(err);
    })
}