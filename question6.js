function waitAll(){
    return Promise.all([
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("first");
                
            }, 1000);
        }),

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("second");
                
            }, 2000);
        }),

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("third");
                
            }, 3000);
        }),
    ])
}

waitAll().then(res => console.log(res));