const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const base = require('./baseController');

const createToken = (id, email) => {
    return jwt.sign({
            id: id,
            email: email
        },
        process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        },
    );
};

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

exports.register = async(req, res, next) => {
    try {

        const {email, first_name, last_name, wallet} = req.body;

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

        const finduser = await User.findOne({ email });
        if(finduser) {
            return next(
                new AppError(201, "fail", "E11000 duplicate email error"),
                req,
                res,
                next,
            );
        }
        
        const finduserwithwallet = await User.findOne({ wallet });
        if(finduserwithwallet) {
            return next(
                new AppError(201, "fail", "E11000 duplicate wallet error"),
                req,
                res,
                next,
            );
        }

        const user = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            wallet: wallet,
        });
        
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

exports.isAdmin = async (req, res, next) => {
    try {
        const { wallet } = req.params;
        const user = await User.findOne({wallet});
        if(user && user.role === "admin") {
            res.status(200).json({
                status: "success",
                isAdmin: true
            });
        } else {
            res.status(200).json({
                status: "success",
                isAdmin: false
            });
        }
    } catch (error) {
        next(error);
    }
}

exports.protect = async(req, res, next) => {
    try {
        // 1) check if the token is there
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }
        if (!token) {
            return next(
                new AppError(
                    201,
                    "fail",
                    "You are not logged in! Please login in to continue",
                ),
                req,
                res,
                next,
            );
        }

        // 2) Verify token
        const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

        // 3) check if the user is exist (not deleted)
        const user = await User.findById(decode.id);
        if (!user) {
            return next(
                new AppError(201, "fail", "This user is no longer exist"),
                req,
                res,
                next,
            );
        }

        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};

// Authorization check if the user have rights to do this action
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.menuroles)) {
            return next(
                new AppError(201, "fail", "You are not allowed to do this action"),
                req,
                res,
                next,
            );
        }
        next();
    };
};