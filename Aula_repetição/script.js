function contar() {
    var n = window.document.getElementById('txtn1')
    var m = window.document.getElementById('txtn2')
    var p = window.document.getElementById('txtpas')
    let r = document.getElementById('res')
    
    if (n.value.length == 0 || m.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        r.innerHTML = 'contando: '
        let i = Number(n.value)
        let fi = Number(m.value)
        let pass = Number(p.value)
        if (pass <= 0) {
            window.alert('passo inválido, considerando PASSO 1')
            pass = 1
        }
        if (i < fi) {
            for (let c = i ; c <= fi ; c+= pass) {
                r.innerHTML += `${c}, `
            }
            r.innerHTML += '!'
        } else {
            for (let c = i; c >= fi; c -= pass) {
                r.innerHTML += `${c}, `
            }
        }
    }      
}