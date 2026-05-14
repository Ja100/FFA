const names = ['Alice', 'Bob', 'Charlie', "Queen"];
const [...rest, v2] = names;
console.log(rest[(rest.length-1)])