const nodemailer = require('nodemailer')
const User = require('../models/userModel');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: true,
    port: 587,
    auth: {
        user: "polarbear91781014@gmail.com",
        pass: "addmcktqxjwceyce"
    }
});

const sendMail = async (data) => {
    console.log('sending')

    const users = await User.find({ email: {$ne: ''} })

    for(let user of users) {
        const mailOptions = {
            from: 'Judicial Asset',
            to: user.email,
            subject: data.title,
            text: data.content
        };

        transporter.verify((err, success) => {
            if (err) {
                return console.error(err);
            }
            transporter.sendMail(mailOptions, function (error) {
                if(error) {
                    console.log(error) ;
                    return;
                }
                return;
            });
        });
    }
}

module.exports = sendMail;