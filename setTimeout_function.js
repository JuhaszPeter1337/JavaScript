function greetings(){
    console.log("I love you Yunona!");
}

function useSetTimeoutFunction(){
    setTimeout(greetings, 1500);
}

function useSetTimeoutFunction2(){
    setTimeout(() => {
        console.log("You are the most beautiful girl in the world Yunona!");
    }, 1500);
}

useSetTimeoutFunction();
useSetTimeoutFunction2();