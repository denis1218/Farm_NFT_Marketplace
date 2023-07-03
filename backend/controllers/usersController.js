const Users = require('../models/userModel');
const base = require('./baseController');
const APIFeatures = require('../utils/apiFeatures');

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

exports.getAllUsers = base.getAll(Users);
exports.getUsers = base.getOne(Users);

exports.setIPAddressForWallet = async (req, res, next) => {
    try {
        const { wallet } = req.params;
        const { ip, country } = req.body;

        const user = await Users.findOne({ wallet });

        if(!user) {
            const newUser = await Users.create({
                ip_address: ip,
                country: country,
                wallet: wallet,
            });
        } else {
            user.ip_address = ip;
            user.country= country;
            user.save();
        }

        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (err) {
        next(err);
    }
}

exports.updateProfile = async(req, res, next) => {
    try {

        const {wallet} = req.params;
        const {email, first_name, last_name} = req.body;

        if (!email || !first_name || !last_name) {
            return next(
                new AppError(201, "fail", "Please provide email or name"),
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

        const finduser = await Users.findOne({ email });
        if(finduser) {
            return next(
                new AppError(201, "fail", "E11000 duplicate email error"),
                req,
                res,
                next,
            );
        }
        
        const user = await Users.findOne({ wallet });

        if(user) {
            user.first_name = first_name;
            user.last_name = last_name;
            user.email = email;
            user.save();
        }
        
        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (err) {
        next(err);
    }
};