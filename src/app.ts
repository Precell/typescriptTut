let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Selahsie';

if (typeof userInput === 'string') {
    userName = userInput 
}

function generateErro(message:string, code:number) {
    throw {message:message, errorCode: code};
}


generateErro("Error occured", 200)
    

function addNums(n1:number, n2:number) {
    if (n1 + n2 > 0) {
        return n1 + n2
    }
    return;
}
