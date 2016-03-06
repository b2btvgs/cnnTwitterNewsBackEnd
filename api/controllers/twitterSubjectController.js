/**
 * TwitterSubjectController
 *
 * @description :: Server-side logic for requesting tweets by subject area
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Twit = require('twit');

module.exports = {

    getTwitterSubjects: function (req, res) {
        //        console.log("calling Mongodb from twitterSubjectController");

        User.findOne(req.userId, function (err, user) {
            //            console.log('req.userId is : ' + req.userId);
            //            console.log("user is: " + JSON.stringify(user));


            var T = new Twit({
                consumer_key: config.TWITTER_KEY,
                consumer_secret: config.TWITTER_SECRET,
                access_token: user.twitterToken,
                access_token_secret: user.twitterSecret,
                timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
            });

            T.get('search/tweets', {

                q: req.param('q'),
                result_type: req.param('result_type'),
                lang: 'en',
                count: 20
            }, function (err, tweets, response) {
                //                console.log(tweets)
                var transformedResponse = [];
                var transformedResponse = _.map(tweets.statuses, function (tweet) {
                    return _.pick(tweet, 'created_at', 'id', 'text', 'retweet_count');
                });
                res.json(transformedResponse);
            })
        })
    }
}