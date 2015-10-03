/**
 * BlsJobsController
 *
 * @description :: Server-side logic for managing blsjobs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `BlsJobsController.getJobsCreated()`
     */
    getJobsCreated: function (req, res) {
        console.log("called jobs server");
        JobsCreated.find()
            .where({
                year: {
                    '>=': 2014
                }
            })
            .sort('yearMonth ASC').exec(function (err, blsJobsCreated) {
                var transformedblsJobsCreated = [];
                var transformedblsJobsCreated = _.map(blsJobsCreated, function (element) {
                    var filteredData = _.pick(element, 'yearMonth', 'blsJobsCreated');
                    return [filteredData.yearMonth, filteredData.blsJobsCreated];;
                });

                console.log(JSON.stringify(transformedblsJobsCreated));
                res.json(transformedblsJobsCreated);
            });
    },


    /**
     * `BlsJobsController.GetUnemploymentRates()`
     */
    GetUnemploymentRates: function (req, res) {
        console.log("called jobs server");
        Job.find()
            .where({
                year: {
                    '>=': 2014
                }
            })
            .sort('yearMonth ASC')
            .exec(function (err, blsUnemploymentRates) {
                var transformedUnemploymentRates = [];
                var transformedUnemploymentRates = _.map(blsUnemploymentRates, function (element) {
                    var filteredData = _.pick(element, 'yearMonth', 'blsUnemploymentRate');
                    return [filteredData.yearMonth, filteredData.blsUnemploymentRate];;
                });

                console.log(JSON.stringify(transformedUnemploymentRates));
                res.json(transformedUnemploymentRates);
            });
    }
};