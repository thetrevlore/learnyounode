let arr = process.argv;
let total = 0;
for (let i = 2; i < arr.length; i++) {
    total += Number(arr[i]);
}

console.log(total);