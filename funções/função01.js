/*function parimpar(n) {
    if (n%2==0) {
        return 'Par!'
    }else {
        return 'Impar!'
    }
}

let pi = parimpar(4)
console.log(pi)*/


/*function soma (n1, n2) {
    return n1 + n2
}

console.log(soma(8,3))*/

function fatorial(n) {
    let fat = 1 
    for(let c=n; c > 1 ; c --) {
        fat *= c 
    }
    return fat 
}

console.log(fatorial(7))


