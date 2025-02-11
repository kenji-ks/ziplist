"use strict";
function zipList(list, list2) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(list[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    const result = [];
    list1.forEach((element, index) => {
        result.push(element, list2[index]);
    });
    return result;
}
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(zipList(list1, list2));
console.log(zipListTheFunctionalWay(list1, list2));
