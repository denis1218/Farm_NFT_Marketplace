const APIFeatures = require('../utils/apiFeatures');
const metadata = require('../models/metadata');

exports.get = async(req, res, next) => {
    try {
        console.log('get metadata');
        res.status(200).json({
            "name": "Aurora Farm NFT",
            "description": "This is Aurora Farm NFT",
            "image": "http://app.judicialasset.com/api/images/{id}.png"
        });
        
    } catch (error) {
        next(error);
    }

};