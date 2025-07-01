function delayedGreet(name, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`name: ${name}`)
        }, delay)
    })
}

delayedGreet("avi", 1000).then(res => {console.log(res)});