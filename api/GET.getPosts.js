module.exports = function(app) {

    var router = app.get('router');
    var request = app.get('request');
    var token = app.get('token');

    router.get('/getPosts', function(req, res) {
        request('https://slack.com/api/pins.list?token=' + token + '&channel=C042VCKLM&pretty=1', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                res.send(body);
            }
        });
    });

    return router;

}
