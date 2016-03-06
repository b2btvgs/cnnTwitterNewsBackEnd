/**
 * SankeyDataController
 *
 * @description :: Server-side logic for managing beagdps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    getSankeyData: function (req, res) {
        console.log("calling Mongodb");
        SankeyData.find({})
            .exec(function (err, sankeyData) {
                console.log(JSON.stringify(sankeyData));
                res.json(sankeyData);
            });
    },

    getSankeyDataById: function (req, res) {
        console.log("invoking getSankeyDataById");
        console.log("sankeyId: " + req.params.id);
        SankeyData.findOne({
                sankeyId: req.params.id
            })
            .exec(function (err, sankeyData) {
                console.log(JSON.stringify(sankeyData));
                res.json(sankeyData);
            });
    }
}