const JoinList = require('../models/joinListModel');
const base = require('./baseController');
const AppError = require('../utils/appError');

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

exports.getAllJoinList = base.getAll(JoinList);

exports.addOne = async(req, res, next) => {
    try {

        const {email, name, phone} = req.body;

        if (!email || !name || !phone) {
            return next(
                new AppError(201, "fail", "Please provide all field"),
                req,
                res,
                next,
            );
        }

        if(!email.match(mailformat)) {
            return next(
                new AppError(201, "fail", "Invalid Email"),
                req,
                res,
                next,
            );
        }

        const finduwithemail = await JoinList.findOne({ email });
        if(finduwithemail) {
            return next(
                new AppError(201, "fail", "E11000 duplicate email error"),
                req,
                res,
                next,
            );
        }
        
        const findwithphone = await JoinList.findOne({ phone });

        if(findwithphone) {
            return next(
                new AppError(201, "fail", "E11000 duplicate phone error"),
                req,
                res,
                next,
            );
        }

        const member = await JoinList.create(req.body);
        
        res.status(200).json({
            status: "success",
            data: member
        });
    } catch (err) {
        console.log(err)
        next(err);
    }
};