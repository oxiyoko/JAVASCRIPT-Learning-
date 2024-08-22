// console.log(1 > 2)
// console.log(2 >= 1)

// console.log("2" > 1)
// console.log("02" > 1)
// console.log(null > 0)
// console.log(null < 0)
// console.log(null == 0)
// console.log(null >= 0)

/*

Equality check == and comparisons > < >= <= work differently
comparisons convert null to a number , treating it as zero
Thats why(3) null >= 0 is true and (1) null > 0  is false

*/

console.log("2" == 2)  // converting datatype and comparing so its show as true
console.log("2" === 2) // not converting datatype and comparing so its show false