function raceTimer(timer1, timer2, timer3) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Timer A")
        }, timer1)

        setTimeout(() => {
            res("Timer B")
        }, timer2)

        setTimeout(() => {
            res("Timer C")
        }, timer3)
    })
}

raceTimer(1000, 2000, 900).then(res => {
    console.log(res);
})