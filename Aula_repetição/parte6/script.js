function tabuada() {
    var ta = window.document.getElementById('txtn')
    var sel = window.document.getElementById('seltab')
    if (ta.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(ta.value)
        let c = 1 
        sel.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item)
            c++
        }
    }
}