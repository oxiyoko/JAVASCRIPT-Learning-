// Stack (primitive), Heap (Non - primitive)

let myYoutubeName = "oxiyoko";
let anotherName = myYoutubeName;
anotherName = "Rit kottayam"
console.log(anotherName)


let userOne = {
    email: "oxiyoko@google.com",
    upi : "use@upi"
}

let userTwo = userOne;

userTwo.email = "new@google.com"

console.log(userOne.email);
console.log(userTwo.email);



/*


stack is used for static memory allocation while the heap is used for dynamic memory allocation
In javascript, primitive values such as numbers, strings etc are stored in the stack while objects such as arrays, functions are stored in the heap

Stack ---->

    let myYoutbeName = "oxiyoko";
    let anotherYoutubeName = myYoutbeName;
    anotherYoutubeName = "my New name"

it will not change both value . it only change the value of anotherYoutubeName no change in the value of myYoutbeName;


Heap ---->

    let userOne = {
        email : oxiyoko@google.com
        upi   : oxiyoko@sbi
    }
    
    let userTwo = userOne;
    userTwo.email = "user@google.com"

This will change both the value in userOne and userTwo because it give the reference not the copy of the data . So if we change one of the value .
It will appear in both the places

*/