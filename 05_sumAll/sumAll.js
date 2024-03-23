const sumAll = function(integer1, integer2) {

    if(integer1 !== parseInt(integer1) || integer2 !== parseInt(integer2)){
        return ('ERROR');
    } 
    if(integer1 < 0 || integer2 <0){
        return ('ERROR');
    }

    finalSum = 0;
    largeNum = Math.max(integer1,integer2);
    smallNum = Math.min(integer1,integer2);

    for(let i = smallNum; i <= largeNum; i++){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
