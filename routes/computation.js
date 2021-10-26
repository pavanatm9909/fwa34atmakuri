var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        const value = search_params.get("x")
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.cos() applied to ' + value + ' is ' + Math.cos(value))
        res.write('<br/>Math.asin() applied to ' + value + ' is ' + Math.asin(value))
        res.write('<br/>Math.asinh() applied to ' + value + ' is ' + Math.asinh(value))
        res.end()
    }
});

module.exports = router;
