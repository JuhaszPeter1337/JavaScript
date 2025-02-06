function createPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const waited = true;

            if (waited){
                resolve("I waited!");
            }
            else {
                reject("I didn't wait!");
            }
        }, 500);
    });
}

async function execute() {
    console.log("Before promise");
    await createPromise().then(console.log);
    console.log("After promise");   
}

execute();