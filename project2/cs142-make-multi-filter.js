"use strict";

function cs142MakeMultiFilter(originalArray) {

    var currentArray = originalArray;

    function arrayFilterer(filterCriteria, callback) {

        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }

        var newArray = [];
        
        for (const number of currentArray) {
            if (filterCriteria(number)) {
                newArray.push(number);
            }
        }

        currentArray = newArray;

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;

    }

    return arrayFilterer;
}
