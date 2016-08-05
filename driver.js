/**
 * Created by mpb on 29/07/16.
 */

fs = require('fs');
utils = require('./utility.js');

fs.readFile('/home/mpb/dev/digin/datafiles/sim.csv', function (errd, d) {
    if (errd){
        console.log('Error reading file');
    }
    lookupData = d.toString().split('\r\n');

    var similarAdvisors = utils.getSimilarAdvisorsTotal(lookupData);

    fs.readFile('/home/mpb/dev/digin/datafiles/jsonOut.json', function (err, jd) {
        if (err){
            console.log('Error reading file');
        }
        var json = JSON.parse(jd);
        json.advisors.forEach(function (advisor) {
            var simAd = similarAdvisors[advisor.id] ;
            advisor['info']['similarAgents'] = simAd;
        })

        fs.writeFile('./agentinfo.json', JSON.stringify(json), function (err) {
            if (err){
                console.log('Error writing file');
            }
        });
    })
});
