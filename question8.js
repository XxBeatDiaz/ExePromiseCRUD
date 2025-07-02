import { log } from "node:console";

function chainedGreetings(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Hi");
            resolve();
        }, 1000);
    }).then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("How are you");
                resolve();
            }, 2000);
        }).then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Goodbye");
                    resolve()
                }, 1000);
            })
        })
    })
}

chainedGreetings();