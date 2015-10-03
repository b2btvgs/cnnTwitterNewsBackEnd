module.exports = function (req, res, next) {

    var model = req.options.model;

    if (!model) throw 'ownResource policy requires a valid model - request has no model';

    var Model = req._sails.models[model];

    Model.findOne(req.params.id).exec(function (err, record) {

        console.log('Model.findOne() - req.params.id is: ' + req.params.id);

        if (!record.owner) {

            throw 'model requires owner - ownResource - id: ' + req.params.id;
        }


        if (record.owner !== req.userId)
            return res.status(401).send({
                error: 'You do not have access to that resoure'
            });

        req.record = record;

        next();

    })
};