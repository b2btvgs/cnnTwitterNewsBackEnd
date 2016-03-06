/**
 * BeaGdpController
 *
 * @description :: Server-side logic for managing beagdps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    getGdpRates: function (req, res) {
        console.log("calling Mongodb");
        Gdp.find({})
            .sort('yearQuarter ASC')
            .exec(function (err, gdpRates) {
//                console.log("just in from Mongo: " +
        //                    JSON.stringify(gdpRates));
                var transformedGdpRates = [];
                var transformedGdpRates = _.map(gdpRates, function (element) {
                    var filteredData = _.pick(element, 'yearQuarter', 'gdpPctChange');
                    return [filteredData.yearQuarter, filteredData.gdpPctChange];
                });

//                console.log("Returned from Mongo: " + JSON.stringify(transformedGdpRates));
                res.json(transformedGdpRates);
            });
    }
};