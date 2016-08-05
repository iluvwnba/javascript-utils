/**
 * Created by mpb on 29/07/16.
 */


function getSimilarAdvisorsTotal(advisorList){
    var totalSimilarAdvisors = {};
    advisorList.forEach(function(d, i, array){
        if (d != ''){
            getSimilarAdvisors(array, i, totalSimilarAdvisors);
        }
    });
    return totalSimilarAdvisors;
}

function getSimilarAdvisors(advisorList, index, totalList) {
    totalList[advisorList[index]] = [advisorList[index -2], advisorList[index-1], advisorList[index+1], advisorList[index+2]];
}

module.exports.getSimilarAdvisorsTotal = getSimilarAdvisorsTotal;


