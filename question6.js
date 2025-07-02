function waitAll(){
    return Promise.all([
        setTimeout(() => {
            console.log("first");
            
        }, 1000),

        setTimeout(() => {
            console.log("second");
            
        }, 2000),


        setTimeout(() => {
            console.log("third");
            
        }, 3000)
    ])
}

waitAll()