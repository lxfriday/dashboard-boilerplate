// ref https://www.npmjs.com/package/mocker-api
const Mockjs = require('mockjs')

const proxy = {
  'GET /api/dashboard': (req, res) => {
    return res.status(200).json({
      salesData: {
        sales: 126560,
        weeklyCompare: 12.2,
        dailyCompare: -11.5,
        dailySales: 12423,
      },
      visitorsData: {
        todayVisitors: 5689,
        averageVisitors: 4567,
        visitorsData: [
          1234, 1000, 2000, 1100, 1500, 3000, 888, 666, 1200, 1234, 1000, 2000,
          1100, 1500, 3000, 888, 666, 1200, 888, 666, 1200, 1234, 1000, 2000,
          1100, 1500, 3000, 888, 666, 1200,
        ],
      },
      paymentsData: {
        todayPayments: 1821,
        transRate: 52,
        paymentsData: [
          1234, 1000, 2000, 1100, 1500, 3000, 888, 1234, 1000, 2000, 1100, 1500,
          3000, 888, 1234, 1000, 2000, 1100, 1500, 3000, 888,
        ],
      },
      businessData: {
        today: 78,
        weeklyCompare: 20,
        dailyCompare: -12,
      },
    })
  },
  'GET /api/userInfo': (req, res) => {
    return res.status(200).json({
      uid: 10086,
      name: 'lxfriday',
      sex: 'male',
      authority: 0,
    })
  },
}

module.exports = proxy
