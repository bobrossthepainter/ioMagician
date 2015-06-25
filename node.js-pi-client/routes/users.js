var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET controller config. */
router.get('/getConfig', function (req, res, next) {

    var unitFile = fs.readFileSync('../db/unit.json'),
        unit;

    try {
        unit = JSON.parse(unitFile);
        console.dir(myObj);
    }
    catch (err) {
        console.log('There has been an error parsing your JSON.')
        console.log(err);
        res.json({notSupported: true});
    }

    res.json(unit);
    next();
});

router.put('/putConfig', function (req, res, next) {

    var unit = JSON.stringify(req.body);

    fs.writeFile('./config.json', data, function (err) {
        if (err) {
            console.log('There has been an error saving your configuration data.');
            console.log(err.message);
            res.status(500).send('Error saving config');
        } else {
            res.status(204).send();
        }
        next();
        return;
    });
});

module.exports = router;
