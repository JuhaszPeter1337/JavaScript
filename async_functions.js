// Async = makes a function return a promise
// Await = makes an async function wait for a promise

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked){
                resolve("You walked the dog!")
            }
            else{
                reject("You didn't walk the dog!")
            }
        }, 500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleaned = false;

            if (cleaned){
                resolve("You cleaned the kitchen!");
            }
            else{
                reject("You didn't clean the kitchen!");
            }

        }, 1500);
    });
}

walkDog().then(value => {
    console.log(value);
    return cleanKitchen();
}).then(value => {
    console.log(value);
}).catch(error => {
    console.error("Error:", error);
});