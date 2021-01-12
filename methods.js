const __ = {}

__.each = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i);
    }
}

__.filter = (array, fn) => {
    let data = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            data.push(array[i]);
        }
    }
    return data;
}

__.map = (array, fn) => {
    let data = [];
    for (let i = 0; i < array.length; i++) {
        data.push(fn(array[i]));        
    }
    return data;
}

__.find = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return array[i];
        }
    }
    return -1;
}

__.findIndex = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return i;
        }
    }
    return -1;
}

__.contains = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }    
    }
    return false;
}

__.pluck = (array, property ) => {
    let data = [];
    for (let i = 0; i < array.length; i++) {
       data.push(array[i][property])
    }
    return data;
 }

 __.without = (array, ...paramN) => {
    let data = [];
    for (let i = 0; i < array.length; i++) {
        if (! __.contains(paramN, array[i]) ) {
            data.push(array[i]);
        }
    }
    return data;
 }

const numbers = [1,2,3,2,5];
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

__.each(numbers, (value, position) => console.log(value  * position));
console.log(__.filter(numbers, (element) => element  > 1));
console.log(__.map(numbers, (element) => element  * 3));
console.log(__.find(numbers, (element) => element > 4 ));
console.log(__.findIndex(numbers, (element) => element > 2 ));
console.log(__.contains(numbers, 4));
console.log(__.pluck(stooges, 'name'));
console.log(__.without(numbers, 1, 3));
