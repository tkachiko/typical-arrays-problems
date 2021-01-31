exports.min = function min(array) {
    return array && array.length ? Math.min(...array) : 0;
};

exports.max = function max(array) {
    return array && array.length ? Math.max(...array) : 0;
};

exports.avg = function avg(array) {
    let sum = 0;
    if (array && array.length) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    } else return 0;
};