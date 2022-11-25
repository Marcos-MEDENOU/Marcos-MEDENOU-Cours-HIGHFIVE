function firstUpperCase(str) {
    return str.toLowerCase().split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
}
// console.log(firstUpperCase("Bonjour tout le monde"));

function longestWord(str) {
    return Math.max(...str.split(" ").map(el => el.length));
}
// console.log(longestWord("les chaussettes de l'archiduchesse"));

function confirmEnd(word, end) {
    return word.charAt(word.length - 1) === end;
}
// console.log(confirmEnd("bonjour", "r"));

function truncate(str, length) {
    return str.length < length ? str : str.slice(0, length) + "...";
}
// console.log(truncate("bonjour à tous", 5));
// console.log(truncate("salut", 8));

function findElement(arr, callback) {
    return arr.filter(callback).length > 0 ? arr.filter(callback)[0] : undefined;
}
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

function repeat(word, num) {
    return word.repeat(num);
}
// console.log(repeat("bonjour", 3));

function factorize1(num) {
    return Array.from({length: num}, (_, i) => i + 1).reduce((prev, curr) => curr * prev, 1);
}
// console.log(factorize1(4));

function factorize2(num) {
    return [...Array(10).keys()].map(el => ++el).reduce((prev, curr) => prev * curr, 1);
}
// console.log(factorize(10));

function frankenSplice (arr1, arr2, index) {
    let newArr = arr2.slice(); newArr.splice(index, 0, ...arr1);
    return newArr;
}
// console.log(frankenSplice([1, 2, 3, 4], [], 0));
// console.log(frankenSplice([1, 2], ["a", "b"], 1));

function bouncer(arr) {
    return arr.filter(el => ![false, null, undefined, 0, "", NaN].includes(el));
}
// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer(["a", "b", "c"]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));
// console.log(bouncer([null, NaN, 1, 2, undefined]));

function getIndexToIns(arr, toInsert) {
    return [toInsert,...arr].sort((a, b) => a - b).indexOf(toInsert);
}
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// console.log(getIndexToIns([40, 60], 50));

function mutation (arr) {
    return [...arr[1].toLowerCase()].every(el => [...arr[0].toLowerCase()].indexOf(el) >= 0);
}
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));

function chunkArrayInGroups(arr, num) {
    const chunkSize = Math.ceil(arr.length / num);
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
}

// 
function latinPing(string) {
    return string.toLowerCase().replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
}
// console.log(latinPing(latinPing("hello")));
