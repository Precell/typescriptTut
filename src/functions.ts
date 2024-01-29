// FUNCTION TYPES AND VOID
function adds(n1:number, n2: number):number {
    return n1 + n2
}

function printResults(num:number): void {
    console.log("Result: " + num);
}

printResults(adds(5, 12))

// FUNCTION TYPES AND CALLBACKS
function addAndHandle(n1:number, n2:number, cb: (a: number)=> void) {
    const result = n1 + n2
    cb(result)
}

// FUNCTION AS TYPES
let combineValue: (a:number, b:number) => number;

combineValue = adds;
// combineValue = printResult() ERROR!!!
console.log(combineValue(8, 8));
addAndHandle(23, 23, (result) =>{
    console.log(result);
    
})