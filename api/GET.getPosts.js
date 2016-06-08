module.exports = function(app) {

    var router = app.get('router');
    var request = app.get('request');

    router.get('/getPosts', function(req, res) {
        request('https://slack.com/api/pins.list?token=xoxp-4015048983-45573899089-49188596757-a7964f5ca4&channel=C042VCKLM&pretty=1', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                res.send(body);
            }
        });
    });

    return router;

}
