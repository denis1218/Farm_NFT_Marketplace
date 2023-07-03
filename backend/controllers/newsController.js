const News = require('../models/newsModel');
const base = require('./baseController');
const APIFeatures = require('../utils/apiFeatures');
const sendMail = require('../utils/sendMail');

exports.getAllNews = base.getAll(News);
exports.getNews = base.getOne(News);

// Don't update password on this 
exports.addNews = async(req, res, next) => {
    try {
        const doc = await News.create(req.body);

        sendMail(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }
};

exports.deleteNews = base.deleteOne(News);
// exports.addNews = base.createOne(News);
