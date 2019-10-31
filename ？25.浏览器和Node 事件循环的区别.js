setTimeout(function() {
    console.log('time1')

    Promise.resolve().then(() => {
        console.log('promise 1-1')
    }).then(() => {
        console.log('promise 1-2')
    })

}, 0)

setTimeout(function() {
    console.log('time2')

    Promise.resolve().then(() => {
        console.log('promise 2-1')
    });
}, 0)


// 执行结果不确定
setImmediate(() => {
    console.log('setImmediate')
}, 0)
