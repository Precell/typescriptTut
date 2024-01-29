function sendAnalytics(data: string) {
    console.log(data);
}

sendAnalytics("data")

const button = document.querySelector('button')
// const button = document.querySelector('button')!

function clickHandler(message:string) {
    console.log("Clicked " + message);
    
}




if(button){
    button.addEventListener('click', clickHandler.bind(null, "you are welcome"))    
}