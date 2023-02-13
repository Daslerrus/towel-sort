
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix) {
        matrix.forEach(item => {
            if (matrix.indexOf(item) % 2 == 0) {
                arr.push(...item);
            } else {
                arr.push(...item.reverse());
            }
        });
    }
    return arr;
}
