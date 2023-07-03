const Sales = require('../models/salesModel');
const dayCharts = require('../models/ChartsData/dayChartsModel');
const monthCharts = require('../models/ChartsData/monthChartsModel');
const yearCharts = require('../models/ChartsData/yearChartsModel');
const { formatMonth, formatYear } = require('../utils/helper');

exports.add = async (to, quantity, amount, time) => {
    try {
        const sale = await Sales.create({
            to, quantity, amount, time
        });
        console.log("Successfully saved sales info", sale);

        const daychart = await dayCharts.findOne().sort({date: -1});
        daychart.quantity += quantity;
        daychart.amount += amount;
        daychart.save();

        const month = formatMonth(new Date());
        console.log(month)
        const monChart = await monthCharts.findOne({date: month});
        if(!monChart) { 
            await monthCharts.create({
                quantity: quantity,
                amount: amount,
                date: month
            });
        } else {
            monChart.amount += amount;
            monChart.quantity += quantity;
            monChart.save();
        }

        const year = formatYear(new Date());
        console.log(year)
        const yChart = await yearCharts.findOne({date: year});
        if(!yChart) { 
            await yearCharts.create({
                quantity: quantity,
                amount: amount,
                date: year
            });
        } else {
            yChart.amount += amount;
            yChart.quantity += quantity;
            yChart.save();
        }
    } catch (error) {
        console.log(error);
    }
};

exports.getIncome = async (req, res, next) => {
    try {
        // const sale = await Sales.create(req.body);
        const daychart = await dayCharts.findOne().sort({date: -1});
        const month = formatMonth(new Date());
        const monthchart = await monthCharts.findOne({date: month});
        
        res.status(200).json({
            status: 'success',
            data: {
                today: daychart.amount,
                month: (monthchart ? monthchart.amount : 0)
            }
        });
    } catch (error) {
        next(error);
    }
};
// exports.addOne = async (req, res, next) => {
//     try {
//         // const sale = await Sales.create(req.body);
//         const daychart = await dayCharts.findOne().sort({date: -1});
        
//         res.status(200).json({
//             status: 'success',
//             data: daychart
//         });
//     } catch (error) {
//         next(error);
//     }
// };
