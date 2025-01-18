function callbackForTimer(a, b){
    console.log(a + b);
}

// function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
// 1. parameter: function, 2. parameter: interval, 3. parameter: input parameters

// callbackForTimer = callback function
const interval = setInterval(callbackForTimer, 1000, 1, 2);

// () => {console.log("Hello world!")} = arrow function
const interval2 = setInterval(() => {console.log("Hello world!")}, 1000);

function Timer(){
    this.seconds = 0;

    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

const timer = Timer()