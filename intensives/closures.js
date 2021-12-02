
/*
function increment () {
    let counter = 0
    return function () {
        console.log(++counter)
    }
}
*/

// const increment = () => {
//     let counter = 0
//     return () => {
//         console.log(++counter)
//     }
// }
//
// const foo = increment()
// foo()
// foo()
// foo()


let name = 'Igor'
function foo() {
    console.log(name)
}

///// different module
// let name = 'Eugene'
// foo()

const bar = a => b => a + b
const ff = bar(2)
ff(3)
console.log(ff)
// bar(2)(3)

function debounce(cb, ms) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => cb.apply(this, ...args), ms)
    }
}
const myFetch = () => null
const debouncedFetch = debounce(myFetch, 500)
