function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 500);
    });
}

function fetchData2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetched = false;

            if (fetched){
                resolve("Data received!");
            }
            else {
                reject("Data could not be fetched!");
            }

        }, 500);
    });
}

fetchData().then((value) => { 
    console.log(value); 
});

fetchData2().then(console.log).catch(console.error);

fetchData().then((value) => {
    console.log(value);
    return fetchData2();
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.error("Error:", error);
})
