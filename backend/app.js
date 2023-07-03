const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cron = require('node-cron');

const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const chartsRoutes = require('./routes/chartsRoutes');
const salesRoutes = require('./routes/salesRoutes');
const metadataRoutes = require('./routes/metadataRoutes');
const joinListRoutes = require('./routes/joinListRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const { ListenContract } = require('./utils/contract')
const { setNewDayCron } = require('./controllers/chartsController')

const app = express();

ListenContract();

// Allow Cross-Origin requests
// app.use(cors({
//     origin: ['*'],
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));
app.use(cors());
//app.use(cors({
//    origin: ['https://', 'https://www.', 'http://', 'http://'],
//    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
//}));

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Cron Job
cron.schedule('43 4 * * *', function() {
    console.log('running a task at 0:0');
    setNewDayCron();
});

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Routes
app.use('/auth', authRoutes);
app.use('/user', usersRoutes);
app.use('/news', newsRoutes);
app.use('/metadata', metadataRoutes);
app.use('/charts', chartsRoutes);
app.use('/sales', salesRoutes);
app.use('/joinlist', joinListRoutes);

app.use('/images', express.static('images'));
console.log(new Date());
//handle undefined Routes
app.use('*', (req, res, next) => {
    console.log(req.method);
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;