let valores = [8, 1, 7, 2, 9]
/*for(let p=0; p < valores.length; p ++) {
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}*/

 for(let p in valores) {
     console.log(`A posição ${p} tem o valor ${valores[p]}`)
 }