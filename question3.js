function randomOperation(){
    return new Promise((res, rej) => {
        const random = Math.floor(Math.random() * 2);
        console.log(random);
        
        if(random)
            res("successfull");
        else
            rej("failure")
    })
}
randomOperation().then(res => {
        console.log(res);
        
    }).catch(rej => {
        console.log(rej);
    });