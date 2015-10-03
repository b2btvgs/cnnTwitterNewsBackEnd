/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing beagdps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    getPortfolioAccounts: function (req, res) {
        console.log("calling Mongodb");
        PortfolioAccount.find({})
            .sort('marketValue DESC')
            .exec(function (err, portfolioAccounts) {
                res.json(portfolioAccounts);
            });
    },

    getPortfolioWrappedArray: function (req, res) {
        console.log("calling Mongodb");
        PortfolioAccount.find({})
            .sort('marketValue DESC')
            .exec(function (err, accounts) {
                var accountsTotals = calculateTotals(accounts);
                console.log("accountsTotals: " + JSON.stringify(accountsTotals));

                var transformedAccounts = [];
                var transformedAccounts = _.map(accounts, function (element) {
                    var filteredData = _.pick(element, 'name', 'marketValue', 'cashValue');
                    return [filteredData.name, filteredData.marketValue, filteredData.cashValue];
                });
                transformedAccounts.push(["AccountsTotals", accountsTotals.marketvalueTotal, accountsTotals.cashValueTotal]);
                res.json(transformedAccounts);
            });
    }
};

function calculateTotals(accountsArray) {
    var totalValueSet = {
        marketValueTotal: 0,
        cashValueTotal: 0
    }

    var marketValueTotal = accountsArray.reduce(function (prev, next) {
        return prev + next.marketValue;
    }, 0);

    var cashValueTotal = accountsArray.reduce(function (prev, next) {
        return prev + next.cashValue;
    }, 0);

    return {
        marketvalueTotal: marketValueTotal,
        cashValueTotal: cashValueTotal
    };
};